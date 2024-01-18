  
    // Lists of Indian first names and last names 
    const firstNames = [ 
        'Aarav', 'Aditi', 'Akshay', 'Amit', 'Ananya', 
        'Arjun', 'Avani', 'Bhavya', 'Chetan', 'Devi', 
        'Divya', 'Gaurav', 'Isha', 'Kiran', 'Manoj', 
        'Neha', 'Preeti', 'Rajesh', 'Riya', 'Shreya', 
        'Varun', 'Saurabh', 'Ajay', 'Sandip', 'Sadan', 
        'Jyoti', 'Sapna', 'Prem'
    ]; 
    const lastNames = [ 
        'Agarwal', 'Bansal', 'Chopra', 'Gupta', 'Jain', 
        'Kapoor', 'Mehta', 'Patel', 'Rao', 'Sharma', 
        'Singh', 'Trivedi', 'Verma', 'Yadav'
    ]; 
  
    //  To conjure up a name out of nowhere, use this function. 
  
    export const generateRandomName = () => { 
        const randomFirstName = 
            firstNames[Math.floor(Math.random() * firstNames.length)]; 
        const randomLastName = 
            lastNames[Math.floor(Math.random() * lastNames.length)]; 
        return randomFirstName+randomLastName;   
    }; 
