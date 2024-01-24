const user = require('../models/define');

exports.addmethod = async (req, res, next) => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const number = req.body.number;
        console.log('from req.body>>>>',name, email, number);

        const data = await user.create({
            name: name,
            email: email,
            number: number

        })

        res.json({ newuser: data })
        console.log('response from add method',data);

    } catch (error) {
        res.json({ Error: error })
        console.log('error from add method in add.js',error);
    }
}

exports.getmethod = async (req, res) => {
    try {
      const data = await user.findAll();
      const modifiedData = data.map((user) => ({
        _id: user.id, // Add the _id property
        name: user.name,
        email: user.email,
        number: user.number,
      }));
      res.json({ alluser: modifiedData });
    } catch (error) {
      console.log('Error from add.js get method', error);
      res.json({ Error: error });
    }
  };

  exports.deletemethod = async (req, res) => {
    try {
        console.log('params id:', req.params.id); 
    if (!req.params.id) {
        throw new Error('id is mandatory to delete');
      }
      const detailsId = req.params.id;
      console.log('id of params',detailsId)
      await user.destroy({ where: { id: detailsId } });
      res.sendStatus(200); 
    } catch (error) {
      console.log('error from add.js delete method', error);
      res.status(500).json({ error: error.message }); 
    }
  };