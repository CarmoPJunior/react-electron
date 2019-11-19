
    const monthFullNames = [
        "Janeiro", "Fevereiro", "Março",
        "Abril", "Maio", "Junho", "Julho",
        "Agosto", "Setembro", "Outubro",
        "Nvembro", "Dezembro"
    ];

    // Function return string date in format "dd/mmm/yyyy"
    export const getShortDate = (date) => {   
    
        let day = date.getDate();
        let monthIndex = date.getMonth();
        let year = date.getFullYear();
    
        return day + ' ' + monthFullNames[monthIndex] + ' ' + year;
    }
  
    // Function return string date in format "dd/mm/yyyy hh:mi:ss"
    export const getFullDateHour = (date) => { 
        return date.toLocaleDateString()
            +' '+ date.toLocaleTimeString();
    }

