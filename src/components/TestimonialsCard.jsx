const TestimonialsCard = ({ quote, name }) => {
    return (
        <div className="max-w-4xl flex flex-col justify-center items-center h-[160px] cursor-pointer card-cosmic-glow  rounded-lg">
            <blockquote className="text-center font-quicksand mt-4">“{quote}”</blockquote>
            <h3 className="font-semibold mt-6 font-playfair mb-4"> -{name} </h3>
        </div>
    );
};

export default TestimonialsCard;
