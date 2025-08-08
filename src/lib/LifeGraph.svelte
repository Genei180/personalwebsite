<script lang="ts">
  const importanceOrder = ['important', 'normal'] as const;
  type ImportanceKey = typeof importanceOrder[number];

  const Importance: Record<ImportanceKey, string> = {
    important: "Most Important",
    normal: "Normal",
    // notImportant: "Everything!",
  }

  // Button Selector
  let options: ImportanceKey[] = [...importanceOrder];

  let selectedImportance: ImportanceKey = options[0];
  let onSelect = (option: ImportanceKey) => {};

  function selectOption(option: ImportanceKey) {
    selectedImportance = option;
    onSelect(option);
  }

  function isDimmed(
    elementImportance: ImportanceKey,
    selectedImportance: ImportanceKey
  ): boolean {
    const elementIndex = importanceOrder.indexOf(elementImportance);
    const selectedIndex = importanceOrder.indexOf(selectedImportance);

    return elementIndex > selectedIndex;
  }
  // ---------------------
  
  // TODO: Make Relevancy Switch (Most Important, Normal, Show Everything)
  // TODO: Make Sticky Scroll of Labels

  // TODO: (Split down to Topics Carrer / Feuerwehr / Bos)

  // TODO an: "Show all Acievments (not Directly Relevant for Work, Atemschutz, DLRG, HRG) (Default Off)"

  // Order: Personal Life, Carrer, Volunteering, Hobby
  // Personal Life (Important Milestones too Show off, that dont fit else where Mammut Marsch etc...)

  type TimelineEntry = {
    laneTag: string;
    date: string;
    heading: string;
    content: string;
    importance: ImportanceKey;
  };

  // { laneTag: "career", date: '01-2024', heading: "Software Entwickler", content: 'bei der Hensoldt Sensors GmbH Ulm', importance: "normal" },
  export let entries: TimelineEntry[] = [
    { laneTag: "personal", date: '05.1999', heading: "Birth", content: "Hello World! (I guess?) <br>On the same day, a 200-year flood hit, so I wasn’t the only catastrophe happening. <br>At least I had that going for me.", importance: "important" },
    { laneTag: "career", date: '09.2009 - 07.2015', heading: "Secondary School", content: 'Attended Max Weishaupt Secondary School in Schwendi', importance: "important" },
    { laneTag: "volunteering", date: '05.2011', heading: "Youth Fire Department", content: 'Joined the Youth Fire Department Schwendi-Wain', importance: "normal" },
    { laneTag: "hobby", date: '2015', heading: "Interest in Programming", content: "Started learning programming via free online tools. I began with JavaScript and C#", importance: "normal" },
    { laneTag: "hobby", date: '02.2016', heading: "Perlin Noise Generator", content: "First documented programming project: a Perlin noise generator culminating in a small Minecraft clone. See <a href=\"/blog/DIYMinecraft.md\">Blog Post</a>", importance: "important" },
    { laneTag: "hobby", date: '08.2016', heading: "Scuba Diving", content: "Got CMAS* certified", importance: "normal" },
    { laneTag: "career", date: '09.2015 - 08.2018', heading: "Technical High School", content: 'Attended Karl Arnold Technical High School in Biberach, specializing in the Field mechatronics', importance: "important" },
    { laneTag: "volunteering", date: '11.2015', heading: "School Medical Service", content: 'Joined the school medical service', importance: "normal" },
    { laneTag: "volunteering", date: '09.2016', heading: "Lead the School Medical Team", content: 'Led the school medical team with another student', importance: "important" },
    { laneTag: "volunteering", date: '09.2016 - 08.2018', heading: "Class Representative", content: 'Acted as class representative in 12th and 13th grade with another student', importance: "important" },
    { laneTag: "hobby", date: '10.2016', heading: "Self-coded Perceptron for a Neuronal Network", content: "My interest in neural networks led to programming a simple perceptron. See <a href=\"/blog/Perceptron.md\">Blog Post</a>", importance: "important" },
    { laneTag: "volunteering", date: '03.2017', heading: "FFW Sießen im Wald", content: 'Joined the volunteer fire department Sießen im Wald as an active responder', importance: "normal" },
    { laneTag: "volunteering", date: '03.2017 - 06-2022', heading: "Secretary", content: 'Acted as secretary of the volunteer fire department Sießen im Wald', importance: "important" },
    { laneTag: "hobby", date: '07.2017', heading: "Developed Survive 4 Life", content: "Started developing a 2D side-scroller with infinite terrain and pathfinding enemies via an A* algorithm. See <a href=\"/blog/Survive4Life.md\">Blog Post</a>", importance: "important" },
    { laneTag: "hobby", date: '03.2018', heading: "3D Rendering Project", content: "Curious about 3D rendering, I built a website rendering a 3D cube from the ground up. I learned a lot in the process. See <a href=\"/blog/ItsACube.md\">Blog Post</a>", importance: "important" },
    { laneTag: "career", date: '10.2018 - 09.2021', heading: "Dual Studies", content: 'Earned a Bachelor of Science in Computer Science at DHBW Friedrichshafen', importance: "important" },
    { laneTag: "volunteering", date: '11.2018', heading: "Youth Mentor", content: 'Became a youth mentor in the fire department Sießen im Wald', importance: "normal" },
    { laneTag: "volunteering", date: '01.2019', heading: "FFW Ulm", content: 'Joined the FFW Ulm city center department as an active responder', importance: "normal" },
    { laneTag: "volunteering", date: '11.2019', heading: "Youth Mentor", content: 'Became a youth mentor in the FFW Ulm city center department', importance: "normal" },
    { laneTag: "volunteering", date: '01.2020', heading: "HRG Ulm", content: 'Joined the rope rescue group (Höhenrettungsgruppe) in Ulm', importance: "normal" },
    { laneTag: "hobby", date: '02.2020', heading: "Created the Landing Page for FFW Ulm", content: 'Created the Google First Ranked <a href=\"http:\/\/www.feuerwehr-ulm.de\/\">Landing Page for FFW Ulm</a> too help distinguishing requests to voluntary and official services', importance: "important" },
    { laneTag: "career", date: '09.2021 - 01.2023', heading: "Software Developer", content: 'Worked at Hensoldt Sensors GmbH Ulm', importance: "important" },
    { laneTag: "volunteering", date: '07.2021 - 10.2024', heading: "Youth Fire Department Leader", content: 'Led the youth fire department in FFW Ulm city center, responsible for planning and execution of traingings and events for the youth', importance: "important" },
    { laneTag: "personal", date: '07.2021', heading: "Mammutmarsch", content: "Walked 100 km in 24 hours at the Mammutmarsch Munich. It required stamina and determination. See <a href=\"/blog/Mammutmarsch.md\">Blog Post</a>", importance: "important" },
    { laneTag: "volunteering", date: '07.2022', heading: "Firefighter Proficiency Bronze Badge", content: 'Successfully completed the firefighter \"Leistungsabzeichen\" (proficiency badge) in bronze', importance: "normal" },
    { laneTag: "career", date: '02.2023 - 06.2023', heading: "Voluntary Military Service", content: 'Became a certified mountain infantry soldier', importance: "important" },
    { laneTag: "volunteering", date: '07.2023 - 08.2023', heading: "Humanitarian Aid", content: 'Did a civilian humanitarian aid mission to Kherson, Ukraine. See <a href="/blog/Ukraine.md">Blog Post</a>', importance: "important" },
    { laneTag: "career", date: '09.2023', heading: "Rescue Assistant Training", content: 'Completed the theoretical training to become a rescue assistant, a prerequisite for paramedic training', importance: "normal" },
    { laneTag: "career", date: '23.-05.10.2023', heading: "Emergency Room Internship", content: 'Interned at ZINA (Interdisciplinary Emergency Department) in BWK Ulm, part of paramedic prerequisites', importance: "normal" },
    { laneTag: "career", date: '09.2023 - 11.2023', heading: "Paramedic Training", content: 'Completed theoretical training to become a paramedic. Completed practical training on weekends and holidays at an EMS station', importance: "important" },
    { laneTag: "career", date: '01.2024 - Today', heading: "Software Developer", content: 'At an undisclosed location', importance: "important" },
    { laneTag: "volunteering", date: '03.2024', heading: "Squad Leader in FFW Ulm", content: 'Trained and was appointed as a squad leader in the FFW Ulm', importance: "important" },
    { laneTag: "personal", date: '09.2024', heading: "Einstein Marathon", content: "Proudly ran 42 km in a not-so-proud 5:07:34. Room for improvement!", importance: "normal" },
    { laneTag: "personal", date: '09.2024', heading: "German Sports Badge Gold", content: "Successfully earned the German Sports Badge in Gold", importance: "normal" },
    { laneTag: "hobby", date: '01.2025', heading: "FISAT 1 Certification", content: "Got FISAT 1 certified and became a rope access technician", importance: "normal" },
    { laneTag: "volunteering", date: '02.2025', heading: "DLRG Ulm", content: 'Joined the German Lifesaving Association for Water Rescue (DLRG) in Ulm', importance: "normal" },
    { laneTag: "volunteering", date: '07.2025', heading: "Rescue Swimmer Silver Badge", content: 'Successfully earned the silver Water Rescue Badge', importance: "normal"},
    { laneTag: "hobby", date: '06.2025', heading: "GPS Tracker for Rescue Forces", content: "Built and provisioned GPS trackers for the largest water event in Southern Germany, \"Nahbaden\", to help the DLRG track rescue teams. See <a href=\"/blog/DLRGTracking.md\">Blog Post</a>", importance: "important" }
  ];

  export let laneDescriptionForTag: { [key: string]: string } = {
    personal: "Personal Life",
    volunteering: "Volunteering",
    hobby: "Intressts",
    career: "Career",
  }

  // Holds all Tags
  let laneTags : Set<string> = new Set(
    entries.flatMap(entry => entry.laneTag)
  );

  // Will hold which tags have already appeared
  let allreadyTaggedLanes: Set<string> = new Set();

  function firstTagOccurance(laneTag: string): boolean {
    if ( !allreadyTaggedLanes.has(laneTag)) {
      allreadyTaggedLanes.add(laneTag);
      return true;
    } else {
      return false;
    }
  }

  let allreadyDrawnLanes: Set<string> = new Set();
  function isNewLaneOccurance(laneTag: string): boolean {
    if ( !allreadyDrawnLanes.has(laneTag)) {
      allreadyDrawnLanes.add(laneTag);
      return true;
    } else {
      return false;
    }
  }

  function drawLine(laneTag: string): boolean {
     return allreadyDrawnLanes.has(laneTag);
  }  
</script>

<p>Select what Level of Information Detail you want Highlighted:</p>
<div class="selector">
  {#each options as option}
    <button
      class:selected={option === selectedImportance}
      on:click={() => selectOption(option)}>
       {Importance[option]}
    </button>
  {/each}
</div>

<table>
  <tbody>
    {#each entries as entry }
        <tr>
          <td class="event-date" class:dimmed={isDimmed(entry.importance, selectedImportance)}>{entry.date}</td>
          {#each laneTags as laneTag}
            {#if entry.laneTag == laneTag}
              <td class="branch-lane {laneTag}" class:branch-off={isNewLaneOccurance(laneTag)} class:branch-line={drawLine(laneTag)} >
                <div class="circle"></div>
              </td>
            {:else}
              <td class="{laneTag}" class:branch-lane={drawLine(laneTag)}></td>
            {/if}
          {/each}
          <td class="spacer"></td>
          <td class="event-heading {entry.laneTag}" class:dimmed={isDimmed(entry.importance, selectedImportance)} >
            {entry.heading}
          </td>
        </tr>
        <tr>
          <td class="event-date"></td>
          {#each laneTags as laneTag}
            <td class="{laneTag}" class:branch-lane={drawLine(laneTag)}>
              {#if entry.laneTag == laneTag}
                {#if firstTagOccurance(entry.laneTag)}
                  <div class="branch-lane-name">
                    {laneDescriptionForTag[entry.laneTag]}
                  </div>
                {/if}
              {/if}
            </td>
          {/each}
          <td class="spacer"></td>
          <td class="event-content" class:dimmed={isDimmed(entry.importance, selectedImportance)} >
            {@html entry.content}
          </td>
        </tr>
    {/each}
  </tbody>
</table>


<style>

.selector {
    display: flex;
    gap: 0.5rem;
    justify-content: flex-start;
    padding: 0rem 1rem 2rem 1rem;
  }

  button {
    border: 1px solid var(--border);
    background: var(--background);
    cursor: pointer;
    border-radius: 6px;
    transition: background 0.2s ease;
  }

  button:hover {
    background: var(--accent-muted);
  }

  button.selected {
    background: var(--accent);
    color: var(--text);
  }

/* --------------- */

.event-date {
  text-align: right;
  vertical-align: middle;
}

.branch-lane{
  margin-left: auto;
  vertical-align: middle; 
  border-right: 4px solid;
}

.branch-lane-name {
  writing-mode: vertical-lr;
  /* text-orientation: upright; */
  font-size: 1.2rem;
  padding: 1.5rem 0;
}

.branch-off {
  /* display: flex; */
  border-top: 4px solid;
  border-top-right-radius: 10px;
}

.spacer {
  width: 0.5rem;
}

.event-heading.personal {
  color: #4f46e5;
}

.personal .circle{
  background-color: #4f46e5;
}

.branch-lane.personal{
  color: #4f46e5;
  border-color: #4f46e5 !important;
}

.event-heading.hobby {
  color: #ff0055;
}

.hobby .circle{
  background-color: #ff0055;
}

.branch-lane.hobby{
  color:  #ff0055;
  border-color: #ff0055;
}

.event-heading.volunteering {
  color: #00ff37;
}

.volunteering .circle{
  background-color: #00ff37;
}

.branch-off.volunteering{
  border-color: #00ff37 !important;
}

.branch-lane.volunteering{
  color: #00ff37;
  border-color: #00ff37;
} 

.circle {
  width: 1rem;
  height: 1rem;
  float: right;
  position: relative;
  transform: translateX(calc(50% + 3px));
  border-radius: 50%; /* makes it a circle */
  background-color: white; /* Tmp */
}

.event-heading {
  font-weight: bold;
  font-size: 1.1rem;
  line-height: 1.2;
  align-self: center;
  vertical-align: middle;
  color: var(--text)
}

.event-content {
  margin-top: 0.25rem;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  color: var(--text-muted);
}

table {
  /* border-collapse: collapse; */
  border-spacing: 0;
  font-family: sans-serif;
  table-layout: auto;
}

td {
  /* adds visible borders around every cell for Debugging */
  /* border: 1px solid #666;  */
  text-align: left;
  vertical-align: top;
}

tbody tr:nth-child(odd) {
  background-color: #1a1a1a;
}

tr .dimmed {
  color: #1a1a1a;
}

tbody tr:nth-child(odd) .dimmed {
  color: #222;
}
</style>