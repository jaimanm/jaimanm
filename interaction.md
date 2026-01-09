# Interactive Components Design

## 1. Quantum Circuit Portfolio Filter
**Location**: Index page main section
**Description**: An interactive quantum circuit diagram where each qubit line represents a different skill domain (Quantum Computing, AI/ML, Software Engineering). Users can click on different quantum gates (H, X, CNOT) to filter and highlight projects by technology stack or domain.
- H gate: Shows all projects
- X gate: Toggles between quantum vs classical projects  
- CNOT gate: Shows hybrid projects (quantum + classical)
- Measurement icons: Filter by project status (completed, in-progress, research)

## 2. Live GitHub Contribution Visualizer
**Location**: About page
**Description**: An interactive 3D visualization of your GitHub contribution graph using Three.js. Users can:
- Hover over contribution squares to see project details
- Click on high-activity periods to expand and show specific repositories
- Toggle between different views: calendar, project timeline, technology focus
- Shows repository languages as colored particles floating around the graph

## 3. Project Complexity Radar Chart
**Location**: Projects page
**Description**: Interactive radar charts for each major project showing multiple dimensions:
- Technical complexity (1-10 scale)
- Quantum vs classical ratio
- Research vs implementation focus
- Impact potential
- Technologies used (each tech adds to different axes)
Users can click on different projects to see animated transitions between radar charts.

## 4. Real-time Quantum State Simulator
**Location**: Index page hero section
**Description**: A visual quantum state simulator using p5.js that displays:
- Animated qubit states (Bloch spheres) that rotate based on current time
- Quantum gate operations when user hovers over different sections
- Entanglement visualization connecting different portfolio pieces
- Measurement probabilities that change as user explores the site

## Multi-turn Interaction Loops:

### Portfolio Filter Flow:
1. User arrives → sees quantum circuit with all projects visible
2. User clicks H gate → circuit animates, shows quantum projects highlighted
3. User clicks specific gate → filters to show only relevant projects with smooth transitions
4. User clicks project card → detailed modal appears with tech stack, code snippets
5. User can navigate back to circuit view or explore related projects

### GitHub Visualizer Flow:
1. User enters about page → sees 3D contribution graph
2. User hovers over peak activity → tooltip shows repository names and commit counts
3. User clicks on period → graph zooms into that timeframe, showing specific projects
4. User can filter by programming language or project type
5. Click on project → links to actual GitHub repository

### Project Radar Flow:
1. User visits projects page → sees grid of project cards with mini radar charts
2. User clicks project → full radar chart expands with detailed breakdown
3. User can compare projects side-by-side by selecting multiple
4. Filter controls allow sorting by complexity, impact, or technology
5. Each radar point is clickable to show specific technical details

## Technical Implementation Notes:
- All interactions use smooth CSS transitions and JavaScript animations
- Quantum circuit uses SVG with CSS animations for gate operations
- 3D visualizations use Three.js with fallback to 2D canvas
- Radar charts use ECharts.js for responsive, interactive charts
- State management keeps track of user preferences across pages
- All interactions are mobile-responsive with touch-friendly controls