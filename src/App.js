//import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Table,Button } from 'react-bootstrap';
import React, { useState } from 'react';

function App() {

  // defined hooks
  var [mean, setmean] = useState(0);
  var [median, setmedian] = useState(0);
  var [stdDev, setstdDev] = useState(0);
  var [mode, setmode] = useState(0);
  var [newMean, setnewMean] = useState(0);
  var [newMedian, setnewMedian] = useState(0);
  var [newStdDev, setnewStdDev] = useState(0);
  var [newMode, setnewMode] = useState(0);
  var [number,setNumber] = useState(0);
 

  // generating inital data
  var tempData = [];
  for(var i=0;i<1000;i++){
    tempData.push(Math.floor(Math.random() * 100)+1)
  }
  var [data,setdata] = useState(tempData);

  // function to set and calculates statistics after adding number
  function addNumberAndCalculate(){
    
    setdata(oldArray => [...oldArray, parseInt(number)]);  
    
    // calculating mean
    var total = parseInt(number);
    data.forEach(function(number) {
      total += number;
    });
    setnewMean(total/data.length);

    // calculating median
    data.sort();
    if(data.length%2===0){
      setnewMedian(data[data.length/2-1]);
    }else{
      setnewMedian(data[(Math.floor(data.length/2)+(data.length+1)/2)-1]);
    }
  
  // calculating stdDev
  total = (number-mean)*(number-mean);
  data.forEach(function(number) {
    total += (number-mean)*(number-mean);
  });
  setnewStdDev(Math.sqrt(total/data.length));

  // calculating mode
  var modearray = [],maxi=0,modetemp=0;
  for(let i=0;i<100;i++){
    modearray.push(0);
  }
  data.forEach(function(number) {
    modearray[number-1]++;
    if(maxi<modearray[number-1]){
      maxi = modearray[number];
      modetemp = number;
    }
  });
  setnewMode(modetemp);
}

function generateData(){
    
    // generating new data
    var newData = []
    for(var i=0;i<1000;i++){
      newData.push(Math.floor(Math.random() * 100)+1)
    }
    setdata(newData);

    // calculating mean
    var total = 0;
    data.forEach(function(number) {
      total += number;
    });
    setmean(total/data.length);

    // calculating median
    data.sort();
    if(data.length%2===0){
      setmedian(data[data.length/2-1]);
    }else{
      setmedian(data[(Math.floor(data.length/2)+(data.length+1)/2)-1]);
    }

    // calculating stdDev
    total = 0
    data.forEach(function(number) {
      total += (number-mean)*(number-mean);
    });
    setstdDev(Math.sqrt(total/1000));
    
    // calculating mode
    var modearray = [],maxi=0,modetemp=0;
    for(let i=0;i<100;i++){
      modearray.push(0);
    }
    data.forEach(function(number) {
      modearray[number-1]++;
      if(maxi<modearray[number-1]){
        maxi = modearray[number];
        modetemp = number;
      }
    });
    setmode(modetemp);
}

  return (
    <div className="App" style={{padding:"40px 30%" }}>

      <h3>Statistical Values of Randomly Generated Data</h3>

      <Table striped bordered hover style={{margin:"30px auto 20px" }}>
  <tbody>
    <tr>
      <td>Mean</td>
      <td>{mean}</td>
      
    </tr>
    <tr>
      <td>Median</td>
      <td>{median}</td>
      
    </tr>
    <tr>
      <td>StdDev</td>
      <td>{stdDev}</td>
    </tr>
    <tr>
      <td>Mode</td>
      <td>{mode}</td>
    </tr>
  </tbody>
</Table>
<Button variant="primary" onClick={generateData}>Generate New Data</Button>

{/* form to take number as an input */}
<form style={{margin:"20px auto"}}>
  <label>
    Add Number: 
  </label>
  <input type="number" onChange={e=>setNumber(e.target.value)} />
  <br/>
  <br/>
  <Button variant="primary"  onClick={addNumberAndCalculate}>Add Number</Button>
</form>
<Table striped bordered hover>
  
  <tbody>
    <tr>
      <td>Mean</td>
      <td>{newMean}</td>
      
    </tr>
    <tr>
      <td>Median</td>
      <td>{newMedian}</td>
      
    </tr>
    <tr>
      <td>StdDev</td>
      <td>{newStdDev}</td>
    </tr>
    <tr>
      <td>Mode</td>
      <td>{newMode}</td>
    </tr>
  </tbody>
</Table>
    </div>
  );
  
}

export default App;
