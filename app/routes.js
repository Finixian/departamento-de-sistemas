const { Router } = require('express');
var express = require('express');
var router = express.Router();

module.exports = router;
//declaracion de variables de sistema ^^arrbia^^




router.get('/', (req, res) => {
    res.render('pages/home');
})

router.get('/about', (req, res) => {
    res.render('pages/about')
})

router.get('/contact', (req, res) => {

    res.render('pages/contact')
});

router.get('/ISC', (req, res) => {

    res.render('pages/ISC')
});

router.get('/informatica', (req, res) => {

    res.render('pages/informatica')
});

router.get('/tics', (req, res) => {

    res.render('pages/tics')
});

router.get('/MsVs', (req, res) => {

    res.render('pages/MsVs')
});

router.get('/Val', (req, res) => {

    res.render('pages/Val')
});

router.get('/ObjEdu', (req, res) => {

    res.render('pages/ObjEdu')
});

router.get('/PDP', (req, res) => {

    res.render('pages/PDP')
});

router.get('/AttEgr', (req, res) => {

    res.render('pages/AttEgr')
});

router.get('/Organigrama', (req, res) => {

    res.render('pages/Organigrama')
});

router.get('/PlanR', (req, res) => {

    res.render('pages/PlanR')
});

router.get('/PlanC', (req, res) => {

    res.render('pages/PlanC')
});

router.get('/Noticias', (req, res) => {

    res.render('pages/Noticias')
});

router.get('/Cred', (req, res) => {

    res.render('pages/Cred')
});

router.get('/Servicio', (req, res) => {

    res.render('pages/Servicio')
});

router.get('/Convoc', (req, res) => {

    res.render('pages/Convoc')
});

router.get('/Vinculacion', (req, res) => {

    res.render('pages/Vinculacion')
});


router.get('/Calendario', (req, res) => {

    res.render('pages/Calendario')
});

router.get('/Hola', (req, res) => {

    res.render('pages/Hola')
});

router.get('/GesFor', (req, res) => {

    res.render('pages/GesFor')
});

router.get('/Profesores', (req, res) => {

    res.render('pages/Profesores')
});

router.get('/GesCur', (req, res) => {

    res.render('pages/GesCur')
});

router.get('/CritEv', (req, res) => {

    res.render('pages/CritEv')
});

router.get('/InsEv', (req, res) => {

    res.render('pages/InsEv')
});

router.get('/ProgEst', (req, res) => {

    res.render('pages/ProgEst')
});

router.get('/Laboratorios', (req, res) => {

    res.render('pages/Laboratorios')
});

router.get('/Investigacion', (req, res) => {

    res.render('pages/Investigacion')
});

router.get('/PosConv', (req, res) => {

    res.render('pages/PosConv')
});

router.get('/LinInvs', (req, res) => {

    res.render('pages/LinInvs')
});

router.get('/PosCord', (req, res) => {

    res.render('pages/PosCord')
});

router.get('/PosEst', (req, res) => {

    res.render('pages/PosEst')
});

router.get('/PosProgEst', (req, res) => {

    res.render('pages/PosProgEst')
});

router.get('/PosInv', (req, res) => {

    res.render('pages/PosInv')
});

router.get('/PosProd', (req, res) => {

    res.render('pages/PosProd')
});

router.get('/ISCMat', (req, res) => {

    res.render('pages/ISCMat')
});

router.get('/ISCLabs', (req, res) => {

    res.render('pages/ISCLabs')
});

router.get('/InfMat', (req, res) => {

    res.render('pages/InfMat')
});

router.get('/InfLabs', (req, res) => {

    res.render('pages/InfLabs')
});

router.get('/TicsMat', (req, res) => {

    res.render('pages/TicsMat')
});

router.get('/TicsLabs', (req, res) => {

    res.render('pages/TicsLabs')
});