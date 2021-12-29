const express = require('express')
const fs = require('fs')
const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.sendFile( __dirname + "/form.html");
});

app.post("/form_submit",(req,res) => {
  const {name,email,tel,pass} = req.body;

  fs.readFile("./data.txt", "utf-8",function(err, data)
	{
		if(err)
		{
			console.log("Error occured "+err);
			return
		}

    let users;

    if(data.length === 0){
			users = [];
		}
		else{
			try{
				users = JSON.parse(data);
			}
			catch(err){
				users = {};
			}
		}

    users.push({name,email,tel,pass});

    fs.writeFile("./data.txt", JSON.stringify(users), function(err)
		{
			if(err)
			{
				res.send("Error while saving");
				return;
			}	
		})

    res.sendFile( __dirname + "/form.html");
	})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});