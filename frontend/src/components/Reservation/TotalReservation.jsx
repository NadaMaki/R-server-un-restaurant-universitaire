import React, { useEffect, useState } from 'react';
import { Table, Container, Dropdown, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listReservations } from '../../actions/reservationActions';
import './reservationcss.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useHistory } from 'react-router-dom';



const TotalReservation = () => {
  const dispatch = useDispatch();
  const history = useHistory(); // Use the useHistory hook

  const reservationList = useSelector((state) => state.reservationList);
  const { loading, error, reservations } = reservationList;

  const [emailsWithTotalDays, setEmailsWithTotalDays] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('all');

  useEffect(() => {
    dispatch(listReservations());
  }, [dispatch]);


  useEffect(() => {
    calculateTotalDays();
  }, [reservations, selectedMonth]);

   const calculateTotalDays = () => {
    if (!reservations) {
      return;
    }
  
    let filteredReservations = reservations;

  
   if (selectedMonth !== 'all') {
    const selectedMonthNumber = months.indexOf(selectedMonth);
    filteredReservations = reservations.filter((reservation) => {
      // Parse the month from the reservation dates
      const [, monthStart] = reservation.date0.split('-');
      const [, monthEnd] = reservation.date1.split('-');
      const reservationMonthStart = Number(monthStart);
      const reservationMonthEnd = Number(monthEnd);

      // Check if the selected month is within the range
      return selectedMonthNumber >= reservationMonthStart && selectedMonthNumber <= reservationMonthEnd;
    });
  }

    const uniqueEmails = [...new Set(filteredReservations.map((reservation) => reservation.email))];
  
    const emailsWithDays = uniqueEmails.map((email) => {
      const totalDays = filteredReservations
        .filter((reservation) => reservation.email === email)
        .reduce((total, reservation) => total + Number(reservation.nbjour), 0);
  
      return { email, totalDays };
    });
  
    setEmailsWithTotalDays(emailsWithDays);
  };
  
  const months = ['all','Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin','Juillet', 'Aout', 'Septembre', 'Octobre', 'November', 'December' ];


// goBack
const goBack = () => {
  history.goBack(); // This function navigates back to the previous page
};


// pdf 
  const handleDownloadPDF = () => {
    const doc = new jsPDF();

   doc.text(`E-mails avec le nombre total de jours - ${selectedMonth === 'all' ? 'Tous les mois' : selectedMonth}`, 20, 10);

    const tableData = emailsWithTotalDays.map(({ email, totalDays }, index) => [
      (index + 1).toString(),
      email,
      totalDays.toString(),
    ]);

    doc.autoTable({
      head: [['#', 'E-mail', 'Nombre total de jours']],
      body: tableData,
      startY: 20,
    });

    doc.save('charger_list.pdf');
  };

  return (
    <div className="main"  fluid > 

    <Container>
      <br />
      <br />

      <h2>E-mails avec le nombre total de jours</h2>
      <Button  type="submit"  style={{ float: 'right',  backgroundColor: 'red'  }} onClick={goBack}>Retourner</Button> 
      
      <br />
      <br />

      <Dropdown onSelect={(eventKey) => setSelectedMonth(eventKey)}  style={{ float: 'right',  backgroundColor: '#b2b3b7'  }} >
        <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ float: 'right',  backgroundColor: '#b2b3b7'  }}>
          {selectedMonth === 'all' ? 'Tous les mois' : selectedMonth}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {months.map((month) => (
            <Dropdown.Item key={month} eventKey={month}>
              {month === 'all' ? 'Tous les mois' : month}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <br />

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="table-responsive text-nowrap">
          <Table responsive className="table table-striped">
            <thead>
              <tr>
                <th>E-mail</th>
                <th>Nombre total de jours</th>
              </tr>
            </thead>
            <tbody>
              {emailsWithTotalDays.map(({ email, totalDays }) => (
                <tr key={email}>
                  <td>{email}</td>
                  <td>{totalDays}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}

       <br />
        <br />

       <Button variant="primary" onClick={handleDownloadPDF} style={{ float: 'right',  backgroundColor: '#b2b3b7'  }}>
       Télécharger le PDF
      </Button> 

      <br />
      <br />

    </Container>
    </div> 
    );
};

export default TotalReservation;
