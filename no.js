console.log("note app");
let addbtn=document.getElementById('Addbtn');
addbtn.addEventListener("click",function(e) {
    
        let addtxt = document.getElementById("Add-text");
        let notes = localStorage.getItem("notes");
        if(notes==null)
        {
            notesobj=[];
        }
        else
        {
            notesobj=JSON.parse(notes);
        }
        notesobj.push(addtxt);
        localStorage.setItem("notes",JSON.stringify(notesobj));
        addtxt.value="";
        console.log(notesobj);
        shownotes();
            
})
function shownotes()
{
    let notes=localStorage.getItem("notes");
    if(notes==null)
        {
            notesobj=[];
        }
        else
        {
            notesobj=JSON.parse(notes);
        }
        let ht="";
        notesobj.forEach(function(element,index)
        {
        ht== `<div class="card my-2 mx-2" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">Note $[index+1]</h5>
          <p class="card-text">$[element+1]</p>
          <button href="#" class="btn btn-primary">delete Note</button>
        </div>
      </div>
        `
        });
        let notesIm=document.getElementById("notes");
        if(notes.length!=0)
        {
            notesIm.innerHTML=ht;
        }

}
