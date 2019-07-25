import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import DescriptionSection from './components/descriptionHeader';
import QuerySection from './components/addressQuery';
import ResultSection from './components/addressList';
import ContentSection from './components/addressContent';



require('dotenv').config();

class App extends Component {
   constructor(props) {
      super(props);
      this.state = { 
         query: '', 
         addressList: [], 
         message: '', 
         addressContent: {} 
      }
   }

   handleChange = (e) => {
      this.setState({ query: e.target.value });
      const queryString = e.target.value.trim();
      if (queryString.length > 0) {
         this.searchAddress(queryString);
      } else {
         this.setState({  query: '', addressList: [], message: '', addressContent: {} });
      }
   }

   searchAddress = queryString => {
      const query = 'http://localhost:8080/v1/resource/address?a=query&text=' + queryString;
      axios.get(query)
         .then(res => {
            console.log(res);
            if (res.status === 200 && res.data.responseData.numhits !== 0) {
               const msg = 'No. of Results Shown: ' + res.data.responseData.hit.length;
               this.setState({ addressList: res.data.responseData.hit, message: msg, addressContent: {}});
            } else {
               this.setState({ addressList: [], message: 'No results found.', addressContent: {}});
            }
         })
         .catch(err => {
            console.log(err);
            this.setState({ addressList: [], message: 'Error occurred.', addressContent: {} });
         });
      console.log(this.state.message);
   }

 

   handleClick = (addressObj) => {
      this.setState({query:addressObj.address});
      const query = 'http://localhost:8080/v1/resource/address?a=getcontent&id=' + addressObj.id;
      axios.get(query)
         .then(res => {
            console.log(res);
            if (res.status === 200 && res.data.responseData.numhits !== 0) {
               const addressContent = res.data.responseData.hit[0].payload;
               if ( addressContent !== undefined && addressContent !== null) {
                  this.setState({ addressContent: addressContent, message: 'Found the content.', addressList: [] });
               } else {
                  this.setState({ addressContent: {}, addressList: [], message: 'Result is null.' });
               }
            } else {
               this.setState({ addressContent: {}, addressList: [], message: 'No results found.' });
            }
         })
         .catch(err => {
            console.log(err);
            this.setState({ addressContent: {}, addressList: [], message: 'Error occurred.' });
         });
      console.log(this.state.message);
   }

 
   render() {
      return (
         <Container>
            <DescriptionSection />
            <QuerySection handleChange={this.handleChange} query={this.state.query} />
            <ResultSection queryResults={this.state.addressList} handleClick={this.handleClick}/>
            <ContentSection addressContent={this.state.addressContent} />
         </Container>
      );
   }
}


ReactDOM.render(<App />, document.getElementById('root'));


