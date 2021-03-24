import React, { Component } from "react";
import { HomeWrap } from "../styles/Homestyle";
import Chart from "./Chart";
import CountrySelect from "./CountrySelect";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      startDate: "",
      endDate: "",
      currencyDetails: {},
      detailsRespaonse: {},
      currentprice: "",
      selectedCurrency: "USD",
      activeIndex: 0,
      currencySelected: {},
      currentpriceNew: [],
    };
  }

  componentDidMount() {
    this.getCurrencyDetails();
    this.getCurrentPrice();
  }

  convert = (str) => {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  };

  setCurrency = (e) => {
    this.setState(
      { selectedCurrency: e.target.value, activeIndex: e.target.id },
      () => {
        this.getCurrencyDetails();
        console.log(e);
      }
    );
  };

  getCurrencyDetails = () => {
    fetch(
      `https://api.coindesk.com/v1/bpi/historical/close.json?currency=${this.state.selectedCurrency}&start=2013-09-01&end=2013-10-31`,
      {
        method: "GET",
        headers: {
          ContentType: "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res && res) {
          this.setState({ currencyDetails: res.bpi, detailsRespaonse: res });
        }
      });
  };

  getCurrentPrice = () => {
    fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`, {
      method: "GET",
      headers: {
        ContentType: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res && res) {
          this.setState({ currentprice: res.bpi }, () => {
            this.setState({
              currentpriceNew: Object.values(this.state.currentprice),
            });
          });
        }
      });
  };

  render() {
    const { currencyDetails, currentprice, selectedCurrency } = this.state;
    let keys = Object.keys(currencyDetails);
    let values = Object.values(currencyDetails);
    return (
      <HomeWrap>
        <div className="container">
          <CountrySelect
            setCurrency={this.setCurrency}
            currentprice={currentprice}
            details={currentprice[selectedCurrency]}
          />
          <Chart keys={keys} values={values} />
        </div>
      </HomeWrap>
    );
  }
}

export default Home;
