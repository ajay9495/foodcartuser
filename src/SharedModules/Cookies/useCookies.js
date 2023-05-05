
export default function useCookies(){

    let name;
    let decodedCookie;
    let character;
    let characterArray;


    function setCookie(data){
        const d = new Date();
        d.setTime(d.getTime() + (1*20*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = "data="+JSON.stringify(data)+";"+expires;
    }

    function getCookie(cname) {

        name = cname + "=";
        decodedCookie = decodeURIComponent(document.cookie);
        characterArray = decodedCookie.split(';');


        for(let i = 0; i <characterArray.length; i++) {

          character = characterArray[i];

          while (character.charAt(0) == ' ') {

            character = character.substring(1);
          }

          if (character.indexOf(name) == 0) {
            return character.substring(name.length, character.length);
          }
        }
        return "";
    }

    const cookie = {
        setCookie:setCookie,
        getCookie:getCookie
    }


    return{ cookie  }

}