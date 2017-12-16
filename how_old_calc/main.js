  const yourAge = document.getElementById('yourAge').value;

    function dateSet(){
      let input = this.value;
      let iArray = input.split('-');
      let iYear = iArray[0];
      let iMonth = iArray[1];
      let iDay = iArray[2];
      
      let cDate = new Date();
      let cYear= cDate.getFullYear();
      let cMonth= cDate.getMonth() + 1;
      let cDay= cDate.getDate();
    
  
      let ageMinutes = ((cYear - iYear) * 525600) + ((cMonth - iMonth)*43800) + ((cDay - iDay) * 1440);
      let ageSeconds = ageMinutes * 60;
      let ageMonths = ageMinutes * 43800;
      let ageYears = ageMinutes / 525599.42184;
  
      let markup = document.createElement('div');
      
      let ageDiv = document.getElementById('content');
      if (iYear){
        ageDiv.innerHTML= (`
        <div class="ageMinutes">
          <h2>
            You Are
          </h2>
          <p class="minutes">${numberWithCommas(ageSeconds)} Seconds Old</p>
          <p class="minutes">${numberWithCommas(ageMinutes)} Minutes Old</p>
          <p class="minutes">${(Math.round(ageYears * 100) / 100)} Years Old</p>
          
        </div>
      `);
      }
    
    }
    const numberWithCommas = (x) => {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
      };
    
  
    document.getElementById('yourAge').addEventListener("change", dateSet);
  