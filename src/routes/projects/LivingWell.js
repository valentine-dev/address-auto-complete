import React, { Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import QuerySection from '../../components/addressQuery';
import ResultSection from '../../components/addressList';
import ContentSection from '../../components/addressContent';
import StatusSection from '../../components/statusMessage';
import ErrorBoundary from '../../utility/ErrorBoundary';

class LivingWell extends Component {
   constructor(props) {
      super(props);
      this.state = {
         query: '',
         addressList: [],
         message: '',
         addressContent: {},
         loading: false
      }
   }

   handleChange = (e) => {
      this.setState({ query: e.target.value });
      const queryString = e.target.value.trim();
      if (queryString.length > 0) {
         this.searchAddress(queryString);
      } else {
         this.setState({ query: '', addressList: [], message: '', addressContent: {}, loading: false });
      }
   }

   searchAddress = queryString => {
      this.setState({ addressList: [], message: 'Loading...', addressContent: {}, loading: true });
      const query = process.env.REACT_APP_SEARCH_REST_API_URL_PREFIX + encodeURI(queryString);
      axios.get(query)
         .then(res => {
            console.log(res);
            if (res.status === 200 && res.data.responseData.numhits !== 0) {
               const found = Math.abs(res.data.responseData.numhits);
               const shown = res.data.responseData.hit.length;
               const msg = 'No. of results found: ' + found + ', shown: ' + shown + '. Results from TELUS are in primary color.';
               this.setState({ addressList: res.data.responseData.hit, message: msg, addressContent: {} });
            } else {
               this.setState({ addressList: [], message: 'Status-' + res.status + ': No results found.', addressContent: {} });
            }
            this.setState({ loading: false });
            console.log(this.state.message);
         })
         .catch(err => {
            console.log(err);
            this.setState({ loading: false, addressList: [], message: 'ERROR occurred while searching.', addressContent: {} });
            console.log(this.state.message);
         });
   }



   handleClick = (addressObj) => {
      this.setState({ query: addressObj.address });
      this.setState({ loading: true, message: 'Loading...' });
      const query = process.env.REACT_APP_FETCH_REST_API_URL_PREFIX + encodeURI(addressObj.id);
      axios.get(query)
         .then(res => {
            console.log(res);
            if (res.status === 200 && res.data.responseData.numhits !== 0) {
               const addressContent = res.data.responseData.hit[0].payload;
               if (addressContent !== undefined && addressContent !== null) {
                  this.setState({ addressContent: addressContent, message: 'Address content found and shown below.', addressList: [] });
               } else {
                  this.setState({ addressContent: {}, addressList: [], message: 'ERROR - Address has no payload.' });
               }
            } else {
               this.setState({ addressContent: {}, addressList: [], message: 'Status-' + res.status + ': No results found.' });
            }
            this.setState({ loading: false });
            console.log(this.state.message);
         })
         .catch(err => {
            console.log(err);
            this.setState({ addressContent: {}, addressList: [], message: 'ERROR occurred while fectching address content.' });
            this.setState({ loading: false });
            console.log(this.state.message);
         });
   }


   render() {
      return (
         <Container style={{ margin: '2rem 0 0 0' }}>
            <StatusSection message={this.state.message} loading={this.state.loading}/>
            <QuerySection handleChange={this.handleChange} query={this.state.query} loading={this.state.loading} />
            <ResultSection queryResults={this.state.addressList} handleClick={this.handleClick} />
            <ContentSection addressContent={this.state.addressContent} />
         </Container>
      );
   }
}

export default () => {
   return <ErrorBoundary><LivingWell /></ErrorBoundary>;
};
