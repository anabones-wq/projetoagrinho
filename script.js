*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: Arial, Helvetica, sans-serif;
}

body{
  background-color:#f4fff4;
  color:#222;
}

header{
  background: linear-gradient(90deg, #0c7a2d, #29a329);
  color:white;
  text-align:center;
  padding:40px 20px;
}

header h1{
  font-size:40px;
  margin-bottom:10px;
}

header p{
  font-size:18px;
}

nav{
  background-color:#145214;
  padding:15px;
  text-align:center;
}

nav a{
  color:white;
  text-decoration:none;
  margin:0 15px;
  font-weight:bold;
  transition:0.3s;
}

nav a:hover{
  color:#b8ffb8;
}

.banner{
  height:350px;
  background-image:url('https://images.unsplash.com/photo-1506744038136-46273834b3fb');
  background-size:cover;
  background-position:center;
  display:flex;
  align-items:center;
  justify-content:center;
  color:white;
  text-shadow:2px 2px 5px black;
}

.banner h2{
  font-size:45px;
  background-color:rgba(0,0,0,0.5);
  padding:15px 25px;
  border-radius:10px;
}

section{
  padding:50px 10%;
}

.titulo{
  text-align:center;
  margin-bottom:40px;
  color:#0c7a2d;
  font-size:35px;
}

.cards{
  display:grid;
  grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));
  gap:25px;
}

.card{
  background:white;
  border-radius:15px;
  overflow:hidden;
  box-shadow:0 4px 10px rgba(0,0,0,0.2);
  transition:0.4s;
}

.card:hover{
  transform:translateY(-10px);
}

.card img{
  width:100%;
  height:220px;
  object-fit:cover;
}

.card-content{
  padding:20px;
}

.card-content h3{
  color:#0c7a2d;
  margin-bottom:10px;
}

.info{
  background-color:#d9ffd9;
  border-left:6px solid #0c7a2d;
  padding:25px;
  border-radius:10px;
  margin-top:30px;
  font-size:18px;
  line-height:1.6;
}

.btn{
  display:block;
  margin:40px auto 0;
  padding:15px 30px;
  border:none;
  background-color:#0c7a2d;
  color:white;
  font-size:18px;
  border-radius:10px;
  cursor:pointer;
  transition:0.3s;
}

.btn:hover{
  background-color:#145214;
}

footer{
  background-color:#145214;
  color:white;
  text-align:center;
  padding:20px;
  margin-top:50px;
}

@media(max-width:768px){

  .banner h2{
    font-size:30px;
    text-align:center;
  }

  header h1{
    font-size:30px;
  }

}
