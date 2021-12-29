let name_ = document.getElementById("name");
let email_ = document.getElementById("email");
let tel_ = document.getElementById("phone");
let pass_ = document.getElementById("pass");
let sub_ = document.getElementById("sub");

sub.addEventListener("click",() => {
    let name = name_.value;
    let email = email_.value;
    let tel = tel_.value;
    let pass = pass_.value;

    const req = new XMLHttpRequest();

    req.open("POST","/form_submit");
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send("name="+name+"&email="+email+"&tel="+tel+"&pass="+pass);

    req.onreadystatechange(() => {
        name_.value="";
        email_.value="";
        tel_.value="";
        pass_.value="";
    })
})