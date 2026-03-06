import MainText from "../../shared/MainText/MainText";
import ProductCard from "../ProductCard/ProductCard";
import ProductDetail from "../ProductDetail/ProductDetail";
import ProductType from "../ProductType/ProductType";

const SectionThree = () => {
    return(
        <div className="pt-10 pb-20 w-full max-w-5xl mx-auto px-10 flex flex-col justify-center items-center text-center gap-y-15">

            <MainText
                text="Produk Kami"
                extraClass="text-xl md:text-3xl"
            />

            <div className="w-full mx-auto grid grid-flow-col md:grid-rows-2 gap-y-10">
                <ProductCard
                    text=""
                    imageName="kemiri-pinterest.jpg"
                />

                <ProductType/>
                <ProductDetail/>
            </div>


        </div>
    );
}

export default SectionThree;