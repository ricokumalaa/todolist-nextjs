import SecondaryText from "../../shared/SecondaryText/SecondaryText";

const ProductType = () => {
    return(
        <div className="flex flex-col justify-center items-center text-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg">
            <SecondaryText
                text="Varian Produk"
            />
            <ul className="list-decimal font-semibold text-left text-[color:var(--secondary-text)]">
                <li>
                    <SecondaryText
                        text="Kemiri Bulat"
                    />
                </li>
                <li>
                    <SecondaryText
                        text="Kemiri Pecah 2"
                    />
                </li>
                <li>
                    <SecondaryText
                        text="Kemiri Menir"
                    />
                </li>
                <li>
                    <SecondaryText
                        text="Custom"
                    />
                </li>
                <li>
                    <SecondaryText
                        text="Packing: (25kg / 50kg / Custom)"
                    />
                </li>
            </ul>
        </div>
    );
}

export default ProductType;