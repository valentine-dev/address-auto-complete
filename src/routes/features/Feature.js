import React, { Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import SearchTypeComponent from '../../components/searchType';
import MaxResultsComponent from '../../components/maxResults';
import CountryComponent from '../../components/country';
import SearchStringComponent from '../../components/searchString';
import ResultSection from '../../components/addressList';
import ContentSection from '../../components/addressContent';
import StatusSection from '../../components/statusMessage';

class Feature extends Component {
   constructor(props) {
      super(props);
      this.state = {
         allowQuery: false,
         country: 'CAN',
         searchType: 'match',
         maxResults: 20,
         searchString: '',
         addressList: [],
         message: '',
         addressContent: {},
         loading: false
      }
   }

   handleSearchStringChange = (e) => {
      const queryString = e.target.value.trim();
      if (queryString.length > 0) {
         this.setState({ allowQuery: true, searchString: queryString });
      } else {
         this.setState({ allowQuery: false, searchString: '' });
      }
      this.setState({ addressContent: {}, addressList: [], message: '', loading: false });
   }

   handleMaxResultsChange = (e) => {
      const value = e.target.value.trim();
      if (value.length > 0) {
         this.setState({ maxResults: value });
      }
      this.setState({ addressContent: {}, addressList: [], message: '', loading: false });
   }

   handleCountryChange = (e) => {
      const value = e.target.value.trim();
      this.setState({ country: value });
      this.setState({ addressContent: {}, addressList: [], message: '', loading: false });
   }

   handleSearchTypeChange = (e) => {
      const value = e.target.value.trim();
      this.setState({ searchType: value });
      this.setState({ addressContent: {}, addressList: [], message: '', loading: false });
   }

   handleSubmit = (e) => {
      e.preventDefault();
      const queryString = this.state.searchString + '&country=' + this.state.country
         + '&searchType=' + this.state.searchType + '&maxResults=' + this.state.maxResults;
      this.searchAddress(encodeURI(queryString));
   }

   searchAddress = queryString => {
      this.setState({ allowQuery: false });
      this.setState({ addressContent: {}, addressList: [], message: 'Loading...', loading: true });
      const query = process.env.REACT_APP_SEARCH_REST_API_URL_PREFIX + queryString;
      console.log("GET " + query);
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
            this.setState({ allowQuery: true, loading: false });
            console.log(this.state.message);
         })
         .catch(err => {
            console.log(err);
            this.setState({ allowQuery: true, addressList: [], message: 'ERROR occurred while searching.', addressContent: {} });
            this.loading = false;
            console.log(this.state.message);
         });
   }

   handleClick = (addressObj) => {
      this.setState({ query: addressObj.address });
      this.setState({ allowQuery: false });
      this.setState({ addressContent: {}, addressList: [], message: 'Loading...', loading: true });
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
            this.setState({ allowQuery: true, loading: false });
            console.log(this.state.message);
         })
         .catch(err => {
            console.log(err);
            this.setState({ addressContent: {}, addressList: [], message: 'ERROR occurred while fectching address content.' });
            this.setState({ allowQuery: true, loading: false });
            console.log(this.state.message);
         });
   }

   render() {
      let searchTypeHasFocus, maxResultsHasFocus, countryHasFocus, searchStringHasFocus;
      switch (this.props.focus) {
         case 'SearchType':
            searchTypeHasFocus = true;
            maxResultsHasFocus = false;
            countryHasFocus = false;
            searchStringHasFocus = false;
            break;
         case 'Country':
            searchTypeHasFocus = false;
            maxResultsHasFocus = false;
            countryHasFocus = true;
            searchStringHasFocus = false;
            break;
         case 'MaxResults':
            searchTypeHasFocus = false;
            maxResultsHasFocus = true;
            countryHasFocus = false;
            searchStringHasFocus = false;
            break;
         default:
            searchTypeHasFocus = false;
            maxResultsHasFocus = false;
            countryHasFocus = false;
            searchStringHasFocus = true;
      }
      return (
         <Container style={{ margin: '2rem 0 2rem 0' }}>
            <Alert variant='primary'>
               <Alert.Heading>Feature - {this.props.heading}</Alert.Heading>
               {this.props.children}
               <hr />
               <p>Please choose different values to explore this feature.</p>
            </Alert>
            <StatusSection message={this.state.message} loading={this.props.loading} />
            <Form autoComplete="off" onSubmit={this.handleSubmit}>
               <SearchStringComponent handleChange={this.handleSearchStringChange} hasFocus={searchStringHasFocus} loading={this.state.loading} />
               <SearchTypeComponent handleChange={this.handleSearchTypeChange} selected={this.state.searchType} hasFocus={searchTypeHasFocus} loading={this.state.loading}/>
               <MaxResultsComponent handleChange={this.handleMaxResultsChange} selected={this.state.maxResults} hasFocus={maxResultsHasFocus} loading={this.state.loading}/>
               <CountryComponent handleChange={this.handleCountryChange} selected={this.state.country} hasFocus={countryHasFocus} loading={this.state.loading}/>
               {this.state.allowQuery && <Button variant="primary" type="submit">Search</Button>}
            </Form>
            <Container style={{ margin: '2rem 0 2rem 0' }}>
               {this.state.addressList.length > 0 && <Form.Label className="text-primary">Search Results: </Form.Label> } 
               {this.state.addressList.length > 0 && <ResultSection queryResults={this.state.addressList} handleClick={this.handleClick} /> }
               {Object.keys(this.state.addressContent).length > 0  && <ContentSection addressContent={this.state.addressContent} />}
            </Container>
         </Container>
      );
   }

}

export default Feature;