router.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, './db/db.json'))
);