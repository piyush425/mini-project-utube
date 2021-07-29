 let div_show=document.getElementById('show');
    async function show_default(){
        let res1 = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=india most popular video&key=AIzaSyDeoqh_R-dVMhsQFSkmDuat4ZMbDExfYXU&maxResults=20`);
        let data1 = await res1.json();
        
        let {items} = data1
         items= items.filter((el) => {
            return el.id.videoId != undefined;
        })
         items.forEach(({ id: { videoId } }) => {
            let div1 = document.createElement('div')

            div1.innerHTML = `<iframe width="250" height="200" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

            div_show.appendChild(div1);


        });
    }
    show_default();

    


    async function getFile(){
        q=document.getElementById('inp').value

       let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${q}&key=AIzaSyDeoqh_R-dVMhsQFSkmDuat4ZMbDExfYXU&maxResults=20`);
          //let res=await fetch('https://youtube.googleapis.com/youtube/v3/videos?chart=mostPopular&regionCode=India&key=AIzaSyDeoqh_R-dVMhsQFSkmDuat4ZMbDExfYXU')
      
        let data=await res.json();
        div_show.innerHTML=null
        console.log(data);

        let {items}=data

        items=items.filter((el)=>{
            return el.id.videoId!=undefined;
        })
        
        items.forEach(({id:{videoId}}) => {
            let  div=document.createElement('div')

            div.innerHTML=`<iframe width="250" height="200" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            
            div_show.appendChild(div);

            
        });
    }