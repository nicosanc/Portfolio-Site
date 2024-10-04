export default function Rectangle() {
    return (
        <svg
            className="absolute -z-10 left-0 top-0" // Keep the rectangle in the background
            width="100vw" // Use viewport width for full coverage
            height="500" // Use viewport height for full coverage
        >
            <rect
                x="0"
                y="200"
                width="100%" // Make the rectangle cover the entire width
                height="100%" // Make the rectangle cover the entire height
                fill="#ccfbf1" // Set the fill color to light sky blue
            />
        </svg>
    );
}
