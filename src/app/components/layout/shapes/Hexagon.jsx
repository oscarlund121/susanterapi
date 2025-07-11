'use client';
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';

const HexagonGrid = () => {
  return ( <div>
        <HexGrid width={1200} height={800} viewBox="-50 -50 100 100">
          {/* Grid with 3 larger hexagons - 2 stacked vertically, 1 to the left */}
          <Layout size={{ x: 22, y: 22 }} flat={true} spacing={0.55} origin={{ x: 0, y: 0 }}>
         {/*    <Hexagon q={-2} r={1} s={1} fill="pat-1" /> */}
            <Hexagon q={0} r={-1} s={1} fill="pat-2" />
            <Hexagon q={0} r={1} s={-1} fill="pat-3" />
          {/*   <Hexagon q={2} r={-1} s={1} fill="pat-4" /> */}
          </Layout>
         
          <Pattern id="pat-2" link="/images/hero-img.png" size={{ x: 30, y: 30 }} offset={{ x: 0, y: 0 }} />
          <Pattern id="pat-3" link="/images/om-mig.png" size={{ x: 30, y: 30 }} offset={{ x: 0, y: 0 }} />
       
        </HexGrid>
      </div> );
}
 
export default HexagonGrid;