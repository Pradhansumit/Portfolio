const Home = () => {
    return (
        <div className="min-h-[calc(100vh-27vh)] flex items-center justify-center">
            <div className="flex flex-col items-center md:flex-row gap-8 justify-between">
                <img
                    src="/signature.svg"
                    alt="Signature"
                    className="invert w-70 h-50"
                />
                <img
                    src="/me.jpg"
                    alt="Signature"
                    className="rounded-2xl w-70 h-70 "
                />
            </div>
        </div>
    );
};

export default Home;
