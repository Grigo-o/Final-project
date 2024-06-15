import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

const productsData = [
	{
		id: 1,
		name: "Apple iPhone 13",
		description:
			"Experience the latest iPhone with advanced features and sleek design.",
		type: "phones",
		price: 999.99,
		image:
			"https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_colors_09142021_big.jpg.large.jpg",
		onSale: true,
	},
	{
		id: 2,
		name: "Dell XPS 13",
		description:
			"The Dell XPS 13 combines performance and portability in one stylish package.",
		type: "laptops",
		price: 1049.99,
		image:
			"https://cdn.vox-cdn.com/thumbor/JDumhAK18Dujmv5JwB13N7EGa1I=/0x0:2040x1360/2000x1333/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24432609/236524_Dell_XPS_13_AKrales_0016.jpg",
		onSale: false,
	},
	{
		id: 3,
		name: "Marshall Minor III",
		description:
			"Industry-leading noise cancellation headphones for a premium audio experience.",
		type: "headphones",
		price: 119.99,
		image:
			"https://static.itechnics.ge/uploads/products/1c5da85fc79949bf309bc68edda638f2754bfdb2d8973e84c26a04457fb207fd.jpg",
		onSale: true,
	},
	{
		id: 4,
		name: "Apple MacBook Pro",
		description: "Powerful performance in a sleek, portable design.",
		type: "laptops",
		price: 1299.99,
		image:
			"https://www.apple.com/newsroom/images/product/mac/standard/Apple_16-inch-MacBook-Pro_111319_big.jpg.large.jpg",
		onSale: false,
	},
	{
		id: 5,
		name: "Samsung Galaxy S21",
		description:
			"The Samsung Galaxy S21 offers cutting-edge performance and an incredible camera.",
		type: "phones",
		price: 799.99,
		image:
			"https://images.samsung.com/sg/smartphones/galaxy-s21/buy/s21_group_kv_mo_img.jpg",
		onSale: false,
	},
	{
		id: 6,
		name: "Sony WH-1000XM4",
		description:
			"Industry-leading noise cancellation headphones for a premium audio experience.",
		type: "headphones",
		price: 349.99,
		image:
			"https://s3.zoommer.ge/zoommer-images/thumbs/0189794_sony-wh-1000xm4-wireless-noise-canceling-stereo-headset-black_550.jpeg",
		onSale: true,
	},
	{
		id: 7,
		name: "Microsoft Surface Pro 7",
		description: "Ultra-light and versatile tablet for on-the-go productivity.",
		type: "tablets",
		price: 749.99,
		image:
			"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-CAROUSEL-surface-pro-7-plus-960x540?scl=1",
		onSale: false,
	},
	{
		id: 8,
		name: "Bose QuietComfort 35 II",
		description: "World-class noise cancellation and premium sound quality.",
		type: "headphones",
		price: 299.99,
		image:
			"https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc35_ii/images/qc35_ii_product_page_blk_and_silver_silo_3x2.psd/jcr:content/renditions/cq5dam.web.320.320.png",
		onSale: true,
	},
	{
		id: 9,
		name: "Amazon Echo Dot (4th Gen)",
		description: "Smart speaker with Alexa for voice-controlled convenience.",
		type: "smart-home",
		price: 49.99,
		image:
			"https://m.media-amazon.com/images/G/31/kindle/journeys/eFu8CFvlYoIj2FKRtRoGVbg0fIKXUEyL3Ry8GNVsaMyM3D/ZWRhMGNkOWUt._CB404330879_.jpg",
		onSale: false,
	},
];

const NavBar = ({ cartItems, total, onClearCart }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [isCartOpen, setIsCartOpen] = useState(false);

	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			handleSearchSubmit(e);
		}
	};

	const handleSearchSubmit = (e) => {
		e.preventDefault();
		const matchingRoute = findMatchingRoute(searchTerm);

		if (matchingRoute) {
			window.location.href = matchingRoute;
		} else {
			console.log(`No matching route found for search term: ${searchTerm}`);
		}

		setSearchTerm("");
	};

	const findMatchingRoute = (searchTerm) => {
		const routes = ["/", "/about", "/contact", "/register", "/login"];
		return routes.find((route) => route.includes(searchTerm));
	};

	const toggleCartDropdown = () => {
		setIsCartOpen(!isCartOpen);
	};

	const clearCart = () => {
		onClearCart();
	};

	const checkOut = () => {
		window.location.reload(); // For demonstration, reload the page
	};

	return (
		<nav className="navbar">
			<img
				className="logo"
				src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-letter-t-design-for-digital-marketing-logo-png-image_5831901.png"
				alt="Logo"
			/>
			<ul className="pages-list">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
				<li>
					<Link to="/register">Register</Link>
				</li>
				<li>
					<Link to="/login">Log In</Link>
				</li>
				<form className="search-form" onSubmit={handleSearchSubmit}>
					<input
						type="text"
						placeholder="Search..."
						value={searchTerm}
						onChange={handleSearchChange}
						onKeyPress={handleKeyPress}
					/>
				</form>
				<div className="nav-end">
					<svg
						className="cart-icon"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="white"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						onClick={toggleCartDropdown}>
						<circle cx="9" cy="21" r="1" />
						<circle cx="20" cy="21" r="1" />
						<path d="M1 1h4l1.68 10.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61l1.38-8.28H6.61" />
					</svg>
					<div className="flags">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/800px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
							alt="Flag UK"
						/>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/640px-Flag_of_Georgia.svg.png"
							alt="Flag Georgia"
						/>
					</div>
				</div>
			</ul>
			{isCartOpen && (
				<div className="cart-dropdown">
					<ul className="cart-list">
						{cartItems.map((item, index) => (
							<li key={index} className="cart-item">
								<img src={item.image} alt={item.name} />
								<p>{item.name}</p>
								<p>${item.price.toFixed(2)}</p>
							</li>
						))}
					</ul>
					<span className="total-line"></span>
					<p className="total">
						Total: <b>${total}</b>
					</p>
					<div className="cart-buttons">
						<button className="clear" onClick={clearCart}>
							Clear cart
						</button>
						<button className="check" onClick={checkOut}>
							Check out
						</button>
					</div>
				</div>
			)}
		</nav>
	);
};

const Modal = ({ isOpen, onClose, content }) => {
	if (!isOpen) return null;

	return (
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<button className="modal-close" onClick={onClose}>
					&times;
				</button>
				{content}
			</div>
		</div>
	);
};

const ProductCard = ({ product, onImageClick, onAddToCart }) => (
	<div className="product-card">
		<img
			src={product.image}
			alt={product.name}
			className="product-image"
			onClick={() => onImageClick(product.image)}
		/>
		<h2 className="product-name">{product.name}</h2>
		<p className="product-description">{product.description}</p>
		<div className="prices">
			{product.onSale ? (
				<s className="old-price">${product.price.toFixed(2)}</s>
			) : (
				<p className="product-price">${product.price.toFixed(2)}</p>
			)}
			{product.onSale && (
				<p className="product-price">
					${(product.price - product.price * 0.1).toFixed(2)}
				</p>
			)}
		</div>
		<div className="card-bottom">
			{product.onSale && <span className="sale-badge">SALE!</span>}
			<button
				className="add-to-cart-button"
				onClick={() => onAddToCart(product)}>
				Add to Cart
			</button>
		</div>
	</div>
);

const FilterProducts = ({ setFilteredProducts, products }) => {
	const [filter, setFilter] = useState("");

	const handleFilterChange = (e) => {
		const value = e.target.value;
		setFilter(value);

		let filtered;
		if (value === "sale") {
			filtered = products.filter((product) => product.onSale);
		} else if (value === "") {
			filtered = products;
		} else {
			filtered = products.filter((product) => product.type === value);
		}
		setFilteredProducts(filtered);
	};

	return (
		<select value={filter} onChange={handleFilterChange} className="filter">
			<option value="">Filter</option>
			<option value="phones">Phones</option>
			<option value="laptops">Laptops</option>
			<option value="headphones">Headphones</option>
			<option value="sale">Sale</option>
		</select>
	);
};

const SortProducts = ({ products, setSortedProducts }) => {
	const handleSortChange = (e) => {
		const selectedOption = e.target.value;

		let sorted;
		if (selectedOption === "priceAsc") {
			sorted = [...products].sort((a, b) => a.price - b.price);
		} else if (selectedOption === "priceDesc") {
			sorted = [...products].sort((a, b) => b.price - a.price);
		} else {
			sorted = products;
		}

		setSortedProducts(sorted);
	};

	return (
		<select onChange={handleSortChange} className="sort">
			<option value="">Sort by</option>
			<option value="priceAsc">Price Ascending</option>
			<option value="priceDesc">Price Descending</option>
		</select>
	);
};

const HomePage = ({ products, addToCart }) => {
	const [filteredProducts, setFilteredProducts] = useState(productsData);
	const [sortedProducts, setSortedProducts] = useState(productsData);
	const [productsToDisplay, setProductsToDisplay] = useState(productsData);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalContent, setModalContent] = useState(null);

	useEffect(() => {
		setProductsToDisplay(filteredProducts);
	}, [filteredProducts]);

	useEffect(() => {
		setProductsToDisplay(sortedProducts);
	}, [sortedProducts]);

	const handleImageClick = (image) => {
		setModalContent(
			<img src={image} alt="Expanded view" style={{ width: "100%" }} />
		);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setModalContent(null);
	};

	return (
		<div className="page">
			<div className="info-area">
				<div className="first-info">
					<h3>Discover the Best in Technology</h3>
					<p>
						At <b>TechMarketPlace</b>, we bring you the latest and greatest in
						tech products. Whether you're looking for the newest smartphone, a
						powerful laptop, or the best noise-canceling headphones, we have you
						covered. Our carefully curated selection features top brands and the
						hottest deals, ensuring you get the best value for your money. Plus,
						our user-friendly platform makes it easy to find exactly what you're
						looking for.
					</p>
				</div>
				<div className="second-info">
					<h3>Featured Products</h3>
					<ul>
						<li>
							<p>Apple iPhone 13</p>
							Experience the latest iPhone with advanced features and sleek
							design.
						</li>
						<li>
							<p>ADell XPS 13</p>
							The Dell XPS 13 combines performance and portability in one
							stylish package.
						</li>
						<li>
							<p>Marshall Minor III</p>
							Industry-leading noise cancellation headphones for a premium audio
							experience.
						</li>
					</ul>
				</div>
			</div>
			<h1>Product Gallery</h1>
			<div className="filters">
				<FilterProducts
					products={productsData}
					setFilteredProducts={setFilteredProducts}
				/>
				<SortProducts
					products={filteredProducts}
					setSortedProducts={setSortedProducts}
				/>
			</div>
			<div className="product-gallery">
				{productsToDisplay.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						onImageClick={handleImageClick}
						onAddToCart={addToCart}
					/>
				))}
			</div>
			<Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
		</div>
	);
};

const ContactForm = () => (
	<div className="contact-form">
		<h2>Contact Us</h2>
		<form>
			<input type="text" placeholder="Name" required />
			<input type="email" placeholder="Email" required />
			<textarea placeholder="Your message" required></textarea>
			<button type="submit">Send</button>
		</form>
	</div>
);

const About = () => (
	<div className="about-page">
		<div className="about-text">
			<h2>About Us</h2>
			<p>
				Welcome to TechMarketPlace, your number one source for the latest and
				greatest in tech products. Founded in 2024, we have quickly become a
				trusted destination for tech enthusiasts and everyday consumers alike.
				At TechMarketPlace, we believe in the power of technology to transform
				lives. Our mission is to provide you with the best tech products,
				carefully curated to meet your needs and exceed your expectations. We
				offer a diverse range of gadgets and electronics, from cutting-edge
				smartphones and high-performance laptops to top-of-the-line headphones
				and smart home devices. Our team is passionate about technology and
				committed to delivering exceptional customer service. We work tirelessly
				to bring you the best deals and the most reliable products from top
				brands. Whether you're a tech-savvy professional or just starting your
				journey into the world of gadgets, we're here to help you make informed
				decisions and find the perfect products to suit your lifestyle. What
				sets us apart is our dedication to quality and customer satisfaction. We
				thoroughly test and review every product we offer, ensuring that you
				receive only the best. Our user-friendly platform makes shopping easy
				and enjoyable, and our knowledgeable support team is always ready to
				assist you with any questions or concerns. Thank you for choosing
				TechMarketPlace. We look forward to helping you discover the latest tech
				innovations and enhance your everyday life with our premium products.
			</p>
		</div>
	</div>
);

const Register = () => (
	<div className="auth">
		<h2>Register</h2>
		<form>
			<input type="email" placeholder="Email" required />
			<input type="password" placeholder="Password" required />
			<button type="submit">Register</button>
		</form>
		<div className="log-options">
			<button className="fb-login">Sign in with Facebook</button>
			<button className="mail-login">Sign in with Gmail</button>
		</div>
	</div>
);

const Login = () => (
	<div className="auth">
		<h2>Log In</h2>
		<form>
			<input type="email" placeholder="Email" required />
			<input type="password" placeholder="Password" required />
			<button type="submit">Sign In</button>
		</form>
		<div className="log-options">
			<button className="fb-login">Sign in with Facebook</button>
			<button className="mail-login">Sign in with Gmail</button>
		</div>
	</div>
);

const App = () => {
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [sortedProducts, setSortedProducts] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [isCartOpen, setIsCartOpen] = useState(false);

	const addToCart = (product) => {
		setCartItems((prevItems) => [...prevItems, product]);
	};

	const toggleCart = () => {
		setIsCartOpen(!isCartOpen);
	};

	const clearCart = () => {
		setCartItems([]);
	};

	const calculateTotal = () => {
		return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
	};

	return (
		<Router>
			<div>
				<NavBar
					onCartIconClick={toggleCart}
					cartItems={cartItems}
					total={calculateTotal()}
					onClearCart={clearCart}
				/>
				<Routes>
					<Route
						path="/"
						element={
							<HomePage
								products={productsData}
								filteredProducts={filteredProducts}
								setFilteredProducts={setFilteredProducts}
								setSortedProducts={setSortedProducts}
								addToCart={addToCart}
							/>
						}
					/>
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<ContactForm />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
