// import React, { useState } from 'react';
// import Page1 from './Page1';
// import Page2 from './Page2';
// import Page3 from './Page3';

// const CentralPlayer = () => {
//   const [currentTrack, setCurrentTrack] = useState({ name: "", audioPath: "" });

//   const handlePlayTrack = (name, audioPath) => {
//     setCurrentTrack({ name, audioPath });
//   };

//             {/* <Route path="/home" element={<ProtectedRoute> <HomePage /> </ProtectedRoute>} /> */}
//             {/* <Route path="/mixes" element={<ProtectedRoute> <MixesPage /> </ProtectedRoute>} />     */}
//             {/* <Route path="/mixlab" element={<ProtectedRoute> <MixLabPage /> </ProtectedRoute>} />   */}
//             {/* <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} /> */}
//             {/* <Route path="/settings" element={<ProtectedRoute> <SettingsPage/> </ProtectedRoute>} />     */}

//   return (
  

//     <div>
//       <Page1 handlePlayTrack={handlePlayTrack} currentTrack={currentTrack} />
//       <Page2 handlePlayTrack={handlePlayTrack} currentTrack={currentTrack} />
//       <Page3 handlePlayTrack={handlePlayTrack} currentTrack={currentTrack} />
//     </div>
//   );
// };

// export default CentralPlayer;