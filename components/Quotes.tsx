import axios from "axios";
import React from "react";
import { BsTwitter } from "react-icons/bs";

class Quotes extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { advice: "" };
  }

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice() {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { advice }: any = this.state;
    this.fetchAdvice = this.fetchAdvice.bind(this);
    return (
      <div
        id="quote-box"
        className=" bg-white flex-row w-10/12 m-auto p-20 rounded-lg "
      >
        <div id="text" className=" text-3xl">
          <p>{advice}</p>
        </div>
        <div id="author" className="flex justify-end text-2xl py-5">
          <p className=" font-medium ">Rin Khimera</p>
        </div>
        <div className="flex justify-between ">
          <button
            id="tweet-quote"
            className="text-3xl text-white bg-pink-500 p-2 rounded"
          >
            <a href="#">
              <BsTwitter />
            </a>
          </button>
          <button
            id="new-quote"
            className="text-xl text-white bg-pink-500 p-2 rounded-lg font-semibold"
            onClick={this.fetchAdvice}
          >
            New Quote
          </button>
        </div>
      </div>
    );
  }
}

export default Quotes;
