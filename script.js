function replaceWords() {
    let noun = document.querySelector("#noun").value;
    let pluralNoun = document.querySelector("#plural-noun").value;
    let adjective = document.querySelector("#adjective").value;
    let verb = document.querySelector("#verb").value;
    

    let resultHTML =  
        `<p class="paragraph fade">Once upon a midnight dreary, while I pondered, weak and weary, 
            Over many a 
                <span class="red spooky">${adjective}</span> 
            and curious volume of forgotten 
                <span class="red extraSpooky">${noun}</span>
            — While I nodded, nearly napping, suddenly there came a tapping, As of some one gently 
                    <span class="red extraSpooky">${verb}</span> , 
                    <span class="red spooky">${verb}</span> 
            at my chamber door. “’Tis some visitor,” I muttered, “tapping at my chamber door— Only 
            <span class="red spooky">${pluralNoun}</span>
                 and nothing more."</p>`;
              

    document.querySelector(".para-container").innerHTML = resultHTML;

    let sound = document.getElementById('beep')
    let play = document.getElementById('play')
    
    console.log('play');
      sound.play();
            return true;
    
    const input = document.getElementsByTagName("input")
            
    if (input.value) {
        input.value = " "
    }
}

document.querySelector(".button").addEventListener("click", replaceWords);