// import "./CartDrawer.css";
// import { X, ShoppingBag } from "lucide-react";
// import { Link } from "react-router-dom";

// function CartDrawer({ isOpen, onClose }) {
//     return (
//         <>
//             <div
//                 className={`cart-overlay ${isOpen ? "show" : ""}`}
//                 onClick={onClose}
//             />

//             <aside className={`cart-drawer ${isOpen ? "open" : ""}`}>

//                 {/* Header */}
//                 <div className="cart-header">

//                     <h2>My Cart</h2>

//                     <button
//                         className="close-btn"
//                         onClick={onClose}
//                     >
//                         <X size={24} />
//                     </button>

//                 </div>

//                 {/* Body */}
//                 <div className="cart-body">

//                     <div className="empty-cart">

//                         <div className="empty-icon">
//                             <ShoppingBag size={70} />
//                         </div>

//                         <h3>Your cart is empty</h3>

//                         <p>
//                             Looks like you haven't added any delicious
//                             Putarekulu yet.
//                         </p>

//                         <Link
//                             to="/products"
//                             className="browse-btn"
//                             onClick={onClose}
//                         >
//                             Browse Products
//                         </Link>

//                     </div>

//                 </div>

//             </aside>
//         </>
//     );
// }

// export default CartDrawer;