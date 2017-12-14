module.exports= {
  getBooks: (req, res, next)=> {
    const dbInstance= req.app.get('db');
    dbInstance.get_all_books()
      .then(books=> res.status(200).json(books))
      .catch( ()=> res.status(500).json());
  },

  getDetails: (req, res, next)=> {
    const dbInstance= req.app.get('db');
    dbInstance.get_details([req.params.id])
      .then(book=> res.status(200).json(book))
      .catch( ()=> res.status(500).json());
  }
}
