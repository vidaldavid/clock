window.addEventListener("load", ()=> {
    let h = document.getElementById("h")
    let m = document.getElementById("m")
    let s = document.getElementById("s")

     const showH = () => {
         let date = new Date()
         let hh = date.getHours()
         let mm = date.getMinutes()
         let ss = date.getSeconds()

         h.textContent =  String(hh).padStart(2, "0")
         m.textContent = String(mm).padStart(2, "0")
         s.textContent = String(ss).padStart(2, "0")

         setTimeout(showH, 1000)
     }
     showH();
});