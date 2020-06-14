var count=0;
var promise;
var s = document.createElement("script");
s.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js";
document.head.appendChild(s);

s.onload = function (e) {
    $(document).on('change', '.checkbox', function () 
    { 
        if (this.checked) {
            promise = new Promise(function (resolve, reject) {
                 count++;
                
               if(chekboxcount(count)) 
                {
                    resolve("Congrats...you have selected 5 To-Do")
                }
                else
               {
                    reject("You have to select 5 chekbox") 
                }
            }).then(function (s) {
                alert(s)
            })
                .catch(function (e)
                 {
                    console.log(e)
                })
        }
        else{
            count--;
        }
    });
}                


function chekboxcount(count)
{ 
  if(count==5)
  {return true}
  else if(count>5)
  {
      alert("You cannot select more than 5 todos");

      
      return false;
  }
  else{
      return false;
  }
}

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => {
        console.log(json)
        let array1 = [];
        for (let i = 0; i < 200; i++)
            array1.push(json[i]);
        array1.forEach(element => {
            var x = document.createElement("INPUT");
            x.setAttribute("type", "checkbox");
            x.setAttribute("class", "checkbox");
                if(element.completed)
                {
                    x.setAttribute("checked", true);
                x.setAttribute("disabled", true);
                }
            var y = document.createElement("label");
            
            y.innerHTML = element.title + "<br>";
            document.body.appendChild(x);
            document.body.appendChild(y);
        })
    }
    )

