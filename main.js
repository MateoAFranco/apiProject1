let randomButton = document.getElementById('randomize-button')

randomButton.addEventListener('click', function() {
    fetch('https://ergast.com/api/f1/2010/drivers.json')
    .then( (response) => response.json()
    )
    .then( (data) => {
        console.log(data)

        

        //! This is the random number generator I will use for the index of the array in the driver variable below!
        let randomNumber = Math.floor(Math.random() * 26); // random number funtion
        console.log(`Random Number: ${randomNumber}`);



        //! this is getting me to the object of a random driver and assigning it to a variable!
        let driver = data.MRData.DriverTable.Drivers[randomNumber];

        let lastName = driver.familyName
        let firstName = driver.givenName
        let wikiPage = driver.url
        let birthDate = driver.dateOfBirth
        let nationality = driver.nationality
        

        //! console.log-ing it to test if I am in the right spot
        console.log(driver)
        console.log(firstName)
        console.log(lastName)
        console.log(wikiPage)
        console.log(birthDate)
        console.log(nationality)


        //! now I want to target my h1 tags and assign them to their variables
        let firstNameInHTML = document.querySelector('h2.first-name')
        let lastNameInHTML = document.querySelector('h2.last-name')
        let wikiPageInHTML = document.querySelector('a.wiki')
        let birthDateInHTML = document.querySelector('p.birth-date')
        let nationalityInHTML = document.querySelector('p.nationality')


        //! I then want to place each key inside the h1 tags by making the .innerHTML equal to the properties in the API for this driver
        firstNameInHTML.innerHTML = firstName
        lastNameInHTML.innerHTML = lastName
        wikiPageInHTML.innerHTML = wikiPage
        birthDateInHTML.innerHTML = `Birthday - ${birthDate}`
        nationalityInHTML.innerHTML = `Nationality - ${nationality}`


        //time to loop through pics
        let driverImage = document.getElementById('driver-pic')

        if(lastName ==='Alguersuari') { //0
            driverImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Jaime_Alguersuari_Canada_2010_cropped.jpg/300px-Jaime_Alguersuari_Canada_2010_cropped.jpg'
        } else if(lastName ==='Alonso') { //1
            driverImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Alonso_2016.jpg/480px-Alonso_2016.jpg'
        } else if(lastName ==='Barrichello') { //2
            driverImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Rubens_Barrichello_2010_Malaysia.jpg/440px-Rubens_Barrichello_2010_Malaysia.jpg'
        } else if(lastName ==='Buemi') { //3
            driverImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/S%C3%A9bastien_Buemi_Formula_E_%28cropped%29.jpg/440px-S%C3%A9bastien_Buemi_Formula_E_%28cropped%29.jpg'
        } else if(lastName ==='Button') { //4
            driverImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Jenson_Button_Bahrain_2012_%28crop%29.jpg/440px-Jenson_Button_Bahrain_2012_%28crop%29.jpg'    
        } else if(lastName ==='Chandhok') { //5
            driverImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Karun_Chandhok_Goodwood_Festival_of_Speed_2019_%2848242680701%29.jpg/440px-Karun_Chandhok_Goodwood_Festival_of_Speed_2019_%2848242680701%29.jpg'
        } else if(lastName ==='de la Rosa') { //6
            driverImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Pedro_de_la_Rosa_2010_Malaysia.jpg/440px-Pedro_de_la_Rosa_2010_Malaysia.jpg'
        } else if(lastName ==='di Grassi') { //7
            driverImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/TechCrunch_Disrupt_Berlin_2018_%28Day_1%29_08_%28cropped%29.jpg/440px-TechCrunch_Disrupt_Berlin_2018_%28Day_1%29_08_%28cropped%29.jpg'
        } else if(lastName ==='Glock') {//8
            driverImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Timo_Glock_Canada_2011-Cropped.jpg/440px-Timo_Glock_Canada_2011-Cropped.jpg' 
        } else if(lastName ==='Hamilton') { //9
            driverImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg/440px-Lewis_Hamilton_2016_Malaysia_2.jpg'
        } else if(lastName ==='Heidfeld') { //10
            driverImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Nick_Heidfeld_Goodwood_Festival_of_Speed_2019_%2848242681251%29.jpg/440px-Nick_Heidfeld_Goodwood_Festival_of_Speed_2019_%2848242681251%29.jpg'
        } else if(lastName ==='Hülkenberg') { //11
            driverImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Nico_Hulkenberg_2016_Malaysia.jpg/440px-Nico_Hulkenberg_2016_Malaysia.jpg'
        } else if(lastName ==='Klien') { //12
            driverImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Christian_Klien_%2813994163352%29.jpg/440px-Christian_Klien_%2813994163352%29.jpg'    
        } else if(lastName ==='Kobayashi') { //13
            driverImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Caterham%2C_No.10_Kamui_Kobayashi_%282%29_%2815531214278%29.jpg/440px-Caterham%2C_No.10_Kamui_Kobayashi_%282%29_%2815531214278%29.jpg'
        } else if(lastName ==='Kovalainen') { //14
            driverImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Effect_20190609_091716.jpg/440px-Effect_20190609_091716.jpg'
        } else if(lastName ==='Kubica') { //15
            driverImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/2014_Rallye_Deutschland_by_2eight_8SC0282.jpg/440px-2014_Rallye_Deutschland_by_2eight_8SC0282.jpg'
        } else if(lastName ==='Liuzzi') { //16
            driverImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Vitantonio_Liuzzi_2011_Malaysia.jpg/440px-Vitantonio_Liuzzi_2011_Malaysia.jpg' 
        } else if(lastName ==='Massa') { //17
            driverImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Felipe_Massa_Le_Mans_Classic_2018_%28cropped%29.jpg/440px-Felipe_Massa_Le_Mans_Classic_2018_%28cropped%29.jpg'
        } else if(lastName ==='Petrov') { //18
            driverImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Vitaly_Petrov_in_Goodwood.jpg/440px-Vitaly_Petrov_in_Goodwood.jpg' 
        } else if(lastName ==='Rosberg') { //19
            driverImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Nico_Rosberg_2016.jpg/440px-Nico_Rosberg_2016.jpg'
        } else if(lastName ==='Schumacher') { //20
            driverImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Michael_Schumacher_china_2012_rotated.png/440px-Michael_Schumacher_china_2012_rotated.png'
        } else if(lastName ==='Senna') { //21
            driverImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Bruno_Senna_canada_2011.jpg/440px-Bruno_Senna_canada_2011.jpg'
        } else if(lastName ==='Sutil') { //22
            driverImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Adrian_Sutil.jpg/440px-Adrian_Sutil.jpg'    
        } else if(lastName ==='Trulli') { //23
            driverImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/12._Internationale_Sportnacht_Davos_2014_%2815432462762%29.jpg/440px-12._Internationale_Sportnacht_Davos_2014_%2815432462762%29.jpg'
        } else if(lastName ==='Vettel') { //24
            driverImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Sebastian_Vettel_2015_Malaysia_podium_1.jpg/440px-Sebastian_Vettel_2015_Malaysia_podium_1.jpg'
        } else if(lastName ==='Webber') {//25
            driverImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Mark_Webber_2017_Malaysian_GP_podium.jpg/360px-Mark_Webber_2017_Malaysian_GP_podium.jpg'
        } else { //26
            driverImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Sakon_Yamamoto_2010_Motorsport_Japan.jpg/440px-Sakon_Yamamoto_2010_Motorsport_Japan.jpg' 
        }
        
    })



})

