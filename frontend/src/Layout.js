import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LoginComponent from './components/Login/LoginComponent';
import Register from './components/Register/Register';
import AddUser from './components/Register/AddUser';

import HomeScreen from './screens/Home/HomeScreen';


import ProfileScreen from './screens/Profile/ProfileScreen';
import DashboardScreen from './screens/Dashboard/DashboardScreen';
import AdminProfileScreen from './screens/Dashboard/ProfileScreen';

import Etablissement from './components/Etablissement/Etablissement';
import Acit1  from './components/Activities/Acit1';
import Acit2  from './components/Activities/Acit2';
import A7  from './components/Activities/A7';

import Acit3  from './components/Activities/Acit3';

import Activities from './components/Activities/Activities';
import Services from './components/Services/Services';
import UserListScreen from './screens/Dashboard/UserListScreen';
import CatalogListScreen from './screens/Dashboard/CatalogListScreen';



import UserListTotal from './components/DashBoard/UserList/UserList';

import UserEditScreen from './screens/UserEdit/UserEditScreen';

import CatalogEditScreen from './components/DashBoard/CatalogEdit/CatalogEditScreen';

import Partners from './components/Partner/Partner';

import Reservation from "./components/Reservation/Reservation";

import TotalReservation from "./components/Reservation/TotalReservation";

import Video from './components/Video/Video';
import Plateforme from './components/Plateforme/Plateforme'
import Moyens from './components/Moyens/Moyens';
import Domaines from './components/Domaines/Domaines';
import Certifications  from './components/Certifications/Certifications';
import Formation from './components/Formation/Formation';

import Acit4  from './components/Activities/Acit4';
import Acit5  from './components/Activities/Acit5';
import Acit6  from './components/Activities/Acit6';

import Catalog from './components/Catalog/Catalog';
import HeroSection from './components/HeroSection/HeroSection';

import ListCatalog from './components/DashBoard/CatalogList/CatalogList'

import ListReservation from './components/DashBoard/CatalogList/ReservationList'


import AddCatalog from './components/DashBoard/CatalogAdd/CatalogAdd'


const Layout = () => {
    return (
        <>
            <Router>
                <Header />
                <Switch>

                    <Route exact path="/" component={HomeScreen} />
                    <Route exact path="/login" component={LoginComponent} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/addUser" component={AddUser} />

                    <Route exact path="/etablissement" component={Etablissement}/>
                    <Route exact path="/activities" component={Activities}/>
                    <Route exact path="/acit1" component={Acit1}/>
                    <Route exact path="/acit2" component={Acit2}/>
                    <Route exact path="/acit3" component={Acit3}/>
                    <Route exact path="/a7" component={A7}/>
                    <Route exact path="/partners" component={Partners}/>

                    <Route exact path="/profile" component={ProfileScreen} />
                    
                    <Route exact path="/reservation" component={Reservation} />

                    <Route exact path="/totalReservation" component={TotalReservation}/>

                    <Route exact path="/services" component={Services} />
                    <Route exact path="/admin/userList" component={UserListScreen} />


                    <Route exact path="/userList" component={ UserListTotal} />

                    <Route exact path="/cataloglist" component={ ListCatalog} />

                    <Route exact path="/reservationlist" component={ ListReservation } />


                    <Route exact path="/catalogadd" component={ AddCatalog } />

                    <Route exact path="/admin/dashboard" component={DashboardScreen} />
                    <Route exact path="/admin/profile" component={AdminProfileScreen} />

                    <Route exact path="/admin/user/:id/edit" component={UserEditScreen} />
    
                    <Route exact path="/heroSection" component={HeroSection}/>
                    <Route exact path="/video" component={Video}/>
                    <Route exact path="/plateforme" component={Plateforme}/>
                    <Route exact path="/moyens" component={Moyens}/>
                    <Route exact path="/domaines" component={Domaines}/>
                    <Route exact path="/certifications" component={Certifications}/>
                    <Route exact path="/formation" component={Formation}/>
                    <Route exact path="/catalog" component={Catalog}/>
                    <Route exact path="/acit4" component={Acit4}/>
                    <Route exact path="/acit5" component={Acit5}/>
                    <Route exact path="/acit6" component={Acit6}/>
                    <Route exact path="/catalog/:id/edit" component={CatalogEditScreen} />
                    <Route exact path="/admin/catalogList" component={CatalogListScreen} />



                </Switch>
                <Footer />
            </Router>
        </>
    )
}

export default Layout
