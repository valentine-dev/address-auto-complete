import React, { Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import SearchTypeComponent from '../../components/searchType';
import MaxResultsComponent from '../../components/maxResults';
import CountryComponent from '../../components/country';
import SourceComponent from '../../components/source';
import SearchStringComponent from '../../components/searchString';
import ResultSection from '../../components/addressList';
import ContentSection from '../../components/addressContent';
import StatusSection from '../../components/statusMessage';

class Feature extends Component {
   constructor(props) {
      super(props);
      this.state = {
         allowQuery: false,
         country: process.env.REACT_APP_FEATURE_3_DEFAULT,
         searchType: process.env.REACT_APP_FEATURE_1_DEFAULT,
         maxResults: process.env.REACT_APP_FEATURE_2_DEFAULT,
         src: process.env.REACT_APP_FEATURE_4_DEFAULT,
         searchString: '',
         addressList: [],
         message: '',
         addressContent: {},
         loading: false
      }
   }

   handleSelectionChange = (e) => {
      if (e.target.type === 'text' && e.target.name === 'searchString') {
         const str = e.target.value.trim();
         str.length > 0 ? this.setState({ allowQuery: true, searchString: str }) :
            this.setState({ allowQuery: false, searchString: '' });
      } else {
         this.setState({ [e.target.name]: e.target.value });
      }
      this.setState({ addressContent: {}, addressList: [], message: '', loading: false });
   }

   handleSubmit = (e) => {
      e.preventDefault();
      const queryString = this.state.searchString + '&country=' + this.state.country
         + '&searchType=' + this.state.searchType + '&maxResults=' + this.state.maxResults
         + '&src=' + this.state.src;
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
            this.setState({ allowQuery: true, loading: false, addressList: [], message: 'ERROR occurred while searching.', addressContent: {} });
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
      return (
         <Container>
            <Alert variant='primary'>
               <Alert.Heading>Feature - {this.props.heading}</Alert.Heading>
               {this.props.children}
               <hr />
               <p>Please choose different values to explore this feature.</p>
            </Alert>
            <StatusSection message={this.state.message} />
            <Form autoComplete="off" onSubmit={this.handleSubmit}>
               <SearchStringComponent handleChange={this.handleSelectionChange} loading={this.state.loading} />
               <SearchTypeComponent handleChange={this.handleSelectionChange} hasFocus={this.props.focus === 'SearchType'} loading={this.state.loading} />
               <MaxResultsComponent handleChange={this.handleSelectionChange} hasFocus={this.props.focus === 'MaxResults'} loading={this.state.loading} />
               <CountryComponent handleChange={this.handleSelectionChange} hasFocus={this.props.focus === 'Country'} loading={this.state.loading} />
               <SourceComponent handleChange={this.handleSelectionChange} hasFocus={this.props.focus === 'Source'} loading={this.state.loading} />
               {this.state.allowQuery && <Button variant="primary" type="submit">Search</Button>}
            </Form>
            <Container style={{ margin: '2rem 0 2rem 0' }}>
               {this.state.addressList.length > 0 && <Form.Label className="text-primary">Search Results: </Form.Label>}
               {this.state.addressList.length > 0 && <ResultSection queryResults={this.state.addressList} handleClick={this.handleClick} />}
               {Object.keys(this.state.addressContent).length > 0 && <ContentSection addressContent={this.state.addressContent} />}
            </Container>
         </Container>
      );
   }

}

export default Feature;