import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class Country extends Component {
   render() {
      return (
         <Form.Group>
            <Form.Label className="text-primary">Country or Territory:</Form.Label>
            <Form.Control as="select" onChange={this.props.handleChange} value={this.props.selected}
               autoFocus={this.props.hasFocus} disabled={this.props.loading}>
               <option value='ASM'>American Samoa</option>
               <option value='AND'>Andorra</option>
               <option value='ARG'>Argentina</option>
               <option value='AUS'>Australia</option>
               <option value='AUT'>Austria</option>
               <option value='BHR'>Bahrain</option>
               <option value='BEL'>Belgium</option>
               <option value='BRA'>Brazil</option>
               <option value='BGR'>Bulgaria</option>
               <option value='CAN'>Canada</option>
               <option value='CHL'>Chile</option>
               <option value='COL'>Colombia</option>
               <option value='HRV'>Croatia</option>
               <option value='CZE'>Czechia</option>
               <option value='DNK'>Denmark</option>
               <option value='ECU'>Ecuador</option>
               <option value='EGY'>Egypt</option>
               <option value='FIN'>Finland</option>
               <option value='FRA'>France</option>
               <option value='DEU'>Germany</option>
               <option value='GIB'>Gibraltar</option>
               <option value='GRC'>Greece</option>
               <option value='GUM'>Guam</option>
               <option value='GGY'>Guernsey</option>
               <option value='HKG'>Hong Kong</option>
               <option value='HUN'>Hungary</option>
               <option value='ISL'>Iceland</option>
               <option value='IND'>India</option>
               <option value='IDN'>Indonesia</option>
               <option value='IRL'>Ireland</option>
               <option value='IMN'>Isle of Man</option>
               <option value='ITA'>Italy</option>
               <option value='JPN'>Japan</option>
               <option value='JEY'>Jersey</option>
               <option value='JOR'>Jordan</option>
               <option value='KOR'>Korea (South)</option>
               <option value='KWT'>Kuwait</option>
               <option value='LVA'>Latvia</option>
               <option value='LTU'>Lithuania</option>
               <option value='LUX'>Luxembourg</option>
               <option value='MAC'>Macao</option>
               <option value='MDV'>Maldives</option>
               <option value='MLT'>Malta</option>
               <option value='MHL'>Marshall Islands</option>
               <option value='MEX'>Mexico</option>
               <option value='FSM'>Micronesia</option>
               <option value='MNE'>Montenegro</option>
               <option value='MAR'>Morocco</option>
               <option value='NAM'>Namibia</option>
               <option value='NLD'>Netherlands</option>
               <option value='NZL'>New Zealand</option>
               <option value='MNP'>Northern Mariana Islands</option>
               <option value='NOR'>Norway</option>
               <option value='PLW'>Palau</option>
               <option value='POL'>Poland</option>
               <option value='PRT'>Portugal</option>
               <option value='PRI'>Puerto Rico</option>
               <option value='ROU'>Romania</option>
               <option value='RUS'>Russia</option>
               <option value='SMR'>San Marino</option>
               <option value='SAU'>Saudi Arabia</option>
               <option value='SRB'>Serbia</option>
               <option value='SGP'>Singapore</option>
               <option value='SVK'>Slovakia</option>
               <option value='SVN'>Slovenia</option>
               <option value='ZAF'>South Africa</option>
               <option value='ESP'>Spain</option>
               <option value='SWE'>Sweden</option>
               <option value='CHE'>Switzerland</option>
               <option value='TWN'>Taiwan</option>
               <option value='TUN'>Tunisia</option>
               <option value='TUR'>Turkey</option>
               <option value='UKR'>Ukraine</option>
               <option value='ARE'>United Arab Emirates</option>
               <option value='GBR'>United Kingdom</option>
               <option value='USA'>United States</option>
               <option value='VIR'>United States Virgin Islands</option>
               <option value='URY'>Uruguay</option>
               <option value='VNM'>Vietnam</option>
            </Form.Control>
         </Form.Group >
      );
   }
}

export default Country;