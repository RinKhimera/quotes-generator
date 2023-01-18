const Quotes = () => {
  return (
    <div
      id="quote-box"
      className=" bg-white flex-row w-10/12 m-auto p-20 rounded-lg "
    >
      <div id="text" className=" text-3xl">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sint
          ullam nisi veritatis accusantium quo obcaecati labore, est laboriosam
          blanditiis distinctio, odio iusto pariatur, consectetur nulla adipisci
          asperiores illo dolore?
        </p>
      </div>
      <div id="author">
        <p>Rin Khimera</p>
      </div>
      <button id="new-quote">Hello</button>
      <button id="tweet-quote">Tweet</button>
    </div>
  );
};

export default Quotes;
