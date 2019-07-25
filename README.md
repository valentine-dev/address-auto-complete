This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Address AutoComplete UI
UI application using `React` and `Redux` to:
1. search address as you type;
2. list the results;
3. display the address content after one is chosen.

## Development Environment Setup
1. Copy all the files to the project folder, and run `npm install` to get all the dependencies.
2. Execute `npm start` to run the app in the development mode.

## Production Deployment
1. Run `npm run build` to build the app for production to the `build` folder.
2. Deploy the application by copying all the files in `build` folder to a folder in production host.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Two REST APIs to Consume
1. FindAddress: 

Sample request:
`http://host:port/v1/resource/address?a=query&text=100 king`

Sample response:
```json
{
    "action": "QUERY",
    "response": "SUCCESS",
    "responseData": {
        "numhits": 185,
        "hit": [
            {
                "id": "WDCRzWoB_RKVM2sVYdqO",
                "score": "108.82639",
                "address": "100 KINGSLAND COURT SE AIRDRIE AB ",
                "source": "TELUS",
                "lastUpdated": null,
                "payload": null
            },
            {
                "id": "VzCRzWoB_RKVM2sVYdqO",
                "score": "102.358086",
                "address": "100 KING STREET E BROCKVILLE ON K6V1B6",
                "source": "TELUS",
                "lastUpdated": null,
                "payload": null
            },
            {
                "id": "CANADA_POST_NCODE_EAVS_100, Kingsfield Villge, Leduc, AB, T9E 5J9",
                "score": null,
                "address": "100, Kingsfield Villge, Leduc, AB, T9E 5J9",
                "source": "CANADA_POST",
                "lastUpdated": null,
                "payload": null
            },
            {
                "id": "CANADA_POST_NCODE_EAVS_100, Kingsbury Close SE, Airdrie, AB, T4A 0R4",
                "score": null,
                "address": "100, Kingsbury Close SE, Airdrie, AB, T4A 0R4",
                "source": "CANADA_POST",
                "lastUpdated": null,
                "payload": null
            },
            {
                "id": "CANADA_POST_NCODE_EAVS_100, Kingsland Close SE, Airdrie, AB, T4A 0C6",
                "score": null,
                "address": "100, Kingsland Close SE, Airdrie, AB, T4A 0C6",
                "source": "CANADA_POST",
                "lastUpdated": null,
                "payload": null
            },
            {
                "id": "CANADA_POST_NCODE_EAVS_100, Kingsland Crt SE, Airdrie, AB, T4A 0E5",
                "score": null,
                "address": "100, Kingsland Crt SE, Airdrie, AB, T4A 0E5",
                "source": "CANADA_POST",
                "lastUpdated": null,
                "payload": null
            },
            {
                "id": "CANADA_POST_NCODE_EAVS_100, Kingsland Hts SE, Airdrie, AB, T4A 0A2",
                "score": null,
                "address": "100, Kingsland Hts SE, Airdrie, AB, T4A 0A2",
                "source": "CANADA_POST",
                "lastUpdated": null,
                "payload": null
            },
            {
                "id": "CANADA_POST_NCODE_EAVS_100, Kingsland Pl SE, Airdrie, AB, T4A 0C7",
                "score": null,
                "address": "100, Kingsland Pl SE, Airdrie, AB, T4A 0C7",
                "source": "CANADA_POST",
                "lastUpdated": null,
                "payload": null
            },
            {
                "id": "CANADA_POST_NCODE_EAVS_100, Kingsmere Cove SE, Airdrie, AB, T4A 0S5",
                "score": null,
                "address": "100, Kingsmere Cove SE, Airdrie, AB, T4A 0S5",
                "source": "CANADA_POST",
                "lastUpdated": null,
                "payload": null
            },
            {
                "id": "CANADA_POST_NCODE_EAVS_100, Kingsland Crt SW, Calgary, AB, T2V 0S2",
                "score": null,
                "address": "100, Kingsland Crt SW, Calgary, AB, T2V 0S2",
                "source": "CANADA_POST",
                "lastUpdated": null,
                "payload": null
            },
            {
                "id": "CANADA_POST_NCODE_EAVS_100, Kings Cres S, Lethbridge, AB, T1K 5G5",
                "score": null,
                "address": "100, Kings Cres S, Lethbridge, AB, T1K 5G5",
                "source": "CANADA_POST",
                "lastUpdated": null,
                "payload": null
            },
            {
                "id": "CANADA_POST_NCODE_EAVS_100, Kingston Dr, Red Deer, AB, T4P 3S5",
                "score": null,
                "address": "100, Kingston Dr, Red Deer, AB, T4P 3S5",
                "source": "CANADA_POST",
                "lastUpdated": null,
                "payload": null
            },
            {
                "id": "CANADA_POST_NCODE_EAVS_100, King St, Spruce Grove, AB, T7X 0J6",
                "score": null,
                "address": "100, King St, Spruce Grove, AB, T7X 0J6",
                "source": "CANADA_POST",
                "lastUpdated": null,
                "payload": null
            },
            {
                "id": "CANADA_POST_NCODE_EAVS_100, King George Terr, Victoria, BC, V8S 2J9",
                "score": null,
                "address": "100, King George Terr, Victoria, BC, V8S 2J9",
                "source": "CANADA_POST",
                "lastUpdated": null,
                "payload": null
            },
            {
                "id": "CANADA_POST_NCODE_EAVS_100, Kingham Pl, Victoria, BC, V9B 1L8",
                "score": null,
                "address": "100, Kingham Pl, Victoria, BC, V9B 1L8",
                "source": "CANADA_POST",
                "lastUpdated": null,
                "payload": null
            },
            {
                "id": "CANADA_POST_NCODE_EAVS_100, King Dr, Prince George, BC, V2M 4V4",
                "score": null,
                "address": "100, King Dr, Prince George, BC, V2M 4V4",
                "source": "CANADA_POST",
                "lastUpdated": null,
                "payload": null
            },
            {
                "id": "CANADA_POST_NCODE_EAVS_100, King St, Winnipeg, MB, R3B 0P6",
                "score": null,
                "address": "100, King St, Winnipeg, MB, R3B 0P6",
                "source": "CANADA_POST",
                "lastUpdated": null,
                "payload": null
            },
            {
                "id": "CANADA_POST_NCODE_EAVS_100, King Edward St E, Winnipeg, MB, R3H 0N8",
                "score": null,
                "address": "100, King Edward St E, Winnipeg, MB, R3H 0N8",
                "source": "CANADA_POST",
                "lastUpdated": null,
                "payload": null
            },
            {
                "id": "CANADA_POST_NCODE_EAVS_100, Kings Dr, Winnipeg, MB, R3T 3E5",
                "score": null,
                "address": "100, Kings Dr, Winnipeg, MB, R3T 3E5",
                "source": "CANADA_POST",
                "lastUpdated": null,
                "payload": null
            },
            {
                "id": "CANADA_POST_NCODE_EAVS_100, Kingston Row, Winnipeg, MB, R2M 0S9",
                "score": null,
                "address": "100, Kingston Row, Winnipeg, MB, R2M 0S9",
                "source": "CANADA_POST",
                "lastUpdated": null,
                "payload": null
            },
            {
                "id": "CANADA_POST_NCODE_EAVS_100, Kingsway, Winnipeg, MB, R3M 0G9",
                "score": null,
                "address": "100, Kingsway, Winnipeg, MB, R3M 0G9",
                "source": "CANADA_POST",
                "lastUpdated": null,
                "payload": null
            },
            {
                "id": "CANADA_POST_NCODE_EAVS_100, King St, Chipman, NB, E4A 2H7",
                "score": null,
                "address": "100, King St, Chipman, NB, E4A 2H7",
                "source": "CANADA_POST",
                "lastUpdated": null,
                "payload": null
            }
        ]
    }
}
```
2. GetAddressContent: 

Sample request:
`http://host:port/v1/resource/address?a=getcontent&id=fIiDB2wBPo2aCZqBfLfF`

Sample response:
```json
{
    "action": "GETCONTENT",
    "response": "SUCCESS",
    "responseData": {
        "numhits": 1,
        "hit": [
            {
                "id": "fIiDB2wBPo2aCZqBfLfF",
                "score": null,
                "address": "780 QUEENSLAND DRIVE SE CALGARY AB T2J4T1",
                "source": "TELUS",
                "lastUpdated": "2019-02-10T04:27:34.722Z",
                "payload": {
                    "id": "2175331",
                    "unit": "",
                    "floor": "",
                    "streetNumberPrefix": "",
                    "streetNumber": "780",
                    "streetNumberSuffix": "",
                    "dirPrefix": "",
                    "streetTypePrefix": "",
                    "streetName": "QUEENSLAND",
                    "streetTypeSuffix": "DRIVE",
                    "dirSuffix": "SE",
                    "city": "CALGARY",
                    "province": "AB",
                    "postalCode": "T2J4T1"
                }
            }
        ]
    }
}
```
