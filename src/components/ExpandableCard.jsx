import React, { useState, useRef, useEffect } from 'react';
import '../styles/ExpandableCard.css';

const ExpandableCard = ({
    subtitle,
    content,
    actionButton,
    initialExpanded = false,
    imageUrl,
    imageAlt,
    imageClass,
    expandedBgColor // Add this new prop
}) => {
    const [isExpanded, setIsExpanded] = useState(initialExpanded);
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);

    // Calculate content height when component mounts or content changes
    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        }
    }, [content, isExpanded]);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    // Generate a color class name based on the expanded background color
    const getColorClass = () => {
        if (!isExpanded || !expandedBgColor) return '';

        // Convert the hex color to a class name
        // Remove # and convert to lowercase
        return `expanded-${expandedBgColor.replace('#', '').toLowerCase()}`;
    };

    return (
        <div className="card-container">
            <div
                className={`card ${isExpanded ? 'expanded' : ''} ${getColorClass()}`}
                style={{
                    backgroundColor: isExpanded && expandedBgColor ? expandedBgColor : 'var(--background-secondary)',
                    transition: 'background-color 0.3s ease-in-out'
                }}
            >
                <div className="card-header">
                    <div className="card-image-container">
                        <img
                            src={imageUrl}
                            alt={imageAlt}
                            className={`card-image ${imageClass || ''}`}
                        />
                    </div>
                    {subtitle && <p className="card-subtitle">{subtitle}</p>}
                </div>

                {/* Card Content */}
                <div
                    className="card-content"
                    style={{
                        maxHeight: isExpanded ? `${contentHeight}px` : '0',
                        opacity: isExpanded ? 1 : 0
                    }}
                >
                    <div className="card-body" ref={contentRef}>
                        {typeof content === 'string' ? (
                            <p style={{ whiteSpace: 'pre-line' }}>{content}</p>
                        ) : (
                            content
                        )}

                        {actionButton && (
                            <div className="button-container">
                                {actionButton}
                            </div>
                        )}
                    </div>
                </div>

                {/* Expand/Collapse Button at Bottom */}
                <div className="toggle-button-container">
                    <button
                        onClick={toggleExpand}
                        className="toggle-button"
                        aria-label={isExpanded ? "Collapse" : "Expand"}
                    >
                        <span className="material-symbols-outlined">
                            {isExpanded ? "expand_circle_up" : "expand_circle_down"}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ExpandableCard;