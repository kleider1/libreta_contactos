const router = require('express').Router();

const { Contactos } = require ('../../db');

router.get('/obtener',async(req,res)=>{
    const contactos  = await Contactos.findAll();
    res.json(contactos);
});

router.get('/obtener/:contactoId',async(req,res)=>{
    const contactos  = await Contactos.findOne({
        where: {id: req.params.contactoId}
    });
    res.json(contactos);    
});

router.post('/crear', async (req,res)=>{
    const contacto = await Contactos.create(req.body);
    res.json(contacto);
});

router.put('/editar/:contactoId', async(req,res)=>{
    await Contactos.update(req.body,{
        where: {id: req.params.contactoId}
    });
    res.json({success: 'ha sido modificado'});
});

router.delete('/eliminar/:contactoId', async(req,res)=>{
    await Contactos.destroy ({
        where: {id: req.params.contactoId}        
    });  
    res.json({success: 'ha borrado el contacto'}); 
});

module.exports = router;