
export default function CustomCursor({ cursorPos }) {
    return (
      <div
        className="fixed w-6 h-6 border-2 border-blue-300 rounded-full pointer-events-none mix-blend-multiply"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
        }}
      />
    );
  }