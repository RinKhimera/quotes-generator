import axios from "axios";
import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

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
        className=" bg-white flex-row w-10/12 m-auto p-20 rounded-lg md:w-1/2 "
      >
        <div className=" text-3xl pb-3 flex justify-start">
          <FaQuoteLeft />
        </div>
        <div
          id="text"
          className="px-10 text-center text-2xl md:text-3xl lg:text-4xl"
        >
          <p>{advice}</p>
        </div>
        <div className=" text-3xl pt-3 flex justify-end">
          <FaQuoteRight />
        </div>
        <div id="author" className="flex justify-end py-5 text-lg md:text-xl ">
          <p className=" font-medium ">© 2023 Rin Khimera</p>
        </div>
        <div className="flex justify-between ">
          <button
            id="tweet-quote"
            className="text-3xl text-white bg-orange-400 p-2 rounded lg:bg-pink-500"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/intent/tweet"
            >
              <BsTwitter />
            </a>
          </button>
          <button
            id="new-quote"
            className="text-xl text-white bg-orange-400 p-2 rounded-lg font-semibold lg:bg-pink-500"
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
