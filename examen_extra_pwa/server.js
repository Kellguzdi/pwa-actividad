const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;



app.use(cors());
// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint para obtener datos (usaremos PouchDB en el cliente)
app.get('/api/data', (req, res) => {
    // Este endpoint puede devolver datos de la base de datos
    res.json({ message: 'Prueba de mensaje para PouchDB 10A' });
});

app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});