import express from 'express';
import asyncHandler from 'express-async-handler';
import Catalog from './../models/catalogModel.js';
import generateToken from './../utils/genarateTokencatalog.js';

// @desc    Auth catalog & token
// @route   POST /api/catalogs/login
// @access  public

 const authCatalog = asyncHandler(async (req, res) => {
    const { titre, link } = req.body;

    const catalog = await Catalog.findOne({ titre  });

    if (catalog) {
        res.json({
            _id: catalog._id,
            titre: catalog.titre,
            link: catalog.link,
            token: generateToken(catalog._id)
        });
    } else {
        res.status(401);
        throw new Error('Invalid titre ');
    }
  });

// @desc    Register new catalog
// @route   POST /api/catalogs/
//// @access  public
//
//
//const registerCatalog = asyncHandler(async (req, res) => {
//    const { titre, link } = req.body;
//
//    const catalog = await Catalog.create({
//        titre,
//        link
//    });
//
//    if (catalog) {
//        res.status(201).json({
//            _id: catalog._id,
//            titre: catalog.titre,
//            link: catalog.link,
//            token: generateToken(catalog._id)
//
//        });
//    } else {
//        res.status(400);
//        throw new Error('Invalid catalog data');
//    }
//});

const registerCatalog = asyncHandler(async (req, res) => {
    const { titre, link } = req.body;
  
    try {
      // Check if the required fields are provided
      if (!titre || !link) {
        return res.status(400).json({ error: 'Both titre and link are required fields.' });
      }
  
      // Create a new catalog document
      const catalog = await Catalog.create({
        titre,
        link,
      });
  
      if (catalog) {
        res.status(201).json({
          _id: catalog._id,
          titre: catalog.titre,
          link: catalog.link,
          token: generateToken(catalog._id)
        });
      } else {
        res.status(400).json({ error: 'Invalid catalog data. Please check your input.' });
      }
    } catch (error) {
      // Handle other errors
      console.error('Server Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

// @desc    Get catalog profile
// @route   GET /api/catalogs/profile
// @access  Private
const getCatalogProfile = asyncHandler(async (req, res) => {
    const catalog = await Catalog.findById(req.catalog._id);

    if (catalog) {
        res.json({
            _id: catalog._id,
            titre: catalog.titre,
            link: catalog.link,
           
        });
    } else {
        res.status(401);
        throw new Error('Catalog not found');
    }
});

// @desc    Update catalog profile
// @route   PUT /api/catalogs/profile
// @access  Private
const updateCatalogProfile = asyncHandler(async (req, res) => {
    const catalog = await Catalog.findById(req.catalog._id);

    if (catalog) {
        catalog.titre = req.body.titre || catalog.titre;
        catalog.link = req.body.link || catalog.link;
        const updatedCatalog = await catalog.save();

        res.json({
            _id: updatedCatalog._id,
            titre: updatedCatalog.titre,
            link: updatedCatalog.link,
            token: generateToken(updatedCatalog._id)

          
        });
    } else {
        res.status(401);
        throw new Error('Catalog not found');
    }
});

// @desc    Get all catalogs
// @route   GET /api/catalogs/
// @access  Private/Admin
const getCatalogs = asyncHandler(async (req, res) => {
    const catalogs = await Catalog.find({});
    res.json(catalogs);
});

// @desc    Delete catalog
// @route   DELETE /api/catalogs/:id
// @access  Private/Admin
const deleteCatalog = asyncHandler(async (req, res) => {
    const catalog = await Catalog.findById(req.params.id);

    if (catalog) {
        await catalog.remove();
        res.json({ message: 'Catalog removed' });
    } else {
        res.status(401);
        throw new Error('Catalog not found');
    }
});

// @desc    Get catalog by ID
// @route   GET /api/catalogs/:id
// @access  Private/Admin
const getCatalogById = asyncHandler(async (req, res) => {
    const catalog = await Catalog.findById(req.params.id).select('-id');

    if (catalog) {
        res.json(catalog);
    } else {
        res.status(401);
        throw new Error('Catalog not found');
    }
});

// @desc    Update catalog
// @route   PUT /api/catalogs/:id
// @access  Private/Admin
const updateCatalog = asyncHandler(async (req, res) => {
    const catalog = await Catalog.findById(req.params.id);

    if (catalog) {
        catalog.titre = req.body.titre || catalog.titre;
        catalog.link = req.body.link || catalog.link;
       

        const updatedCatalog = await catalog.save();

        res.json({
            _id: updatedCatalog._id,
            titre: updatedCatalog.titre,
            link: updatedCatalog.link
            
        });
    } else {
        res.status(401);
        throw new Error('Catalog not found');
    }
});

export {
    
    getCatalogProfile,
    registerCatalog,
    updateCatalogProfile,
    getCatalogs,
    deleteCatalog,
    getCatalogById,
    updateCatalog
};
