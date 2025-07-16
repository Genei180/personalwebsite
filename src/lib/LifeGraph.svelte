<script lang="ts">
  // TODO an: "Show all Acievments (not Directly Relevant for Work, Atemschutz, DLRG, HRG) (Default Off)"

  // Order: Personal Life, Carrer, Volunteering, Hobby
  // Personal Life (Important Milestones too Show off, that dont fit else where Mammut Marsch etc...)

  export let entries = [
    { laneTag: "personal", date: '05-1999', heading: "Born", content: "Hello World! (I Guess?) On the Same Day there was a 200 Year Flood, so i wasn't the Only Katastrophy Happening that Day. Atleast i got that going for me." },
    { laneTag: "personal", date: '08-2003', heading: "Something", content: 'Added Feature X' },
    { laneTag: "volunteering", date: '05-2012', heading: "Eintritt Jugendfeuerwehr", content: 'Experimental Branch Start' },
    { laneTag: "hobby", date: '2016', heading: "Skilehrer", content: 'Refactor Subsystem' },
    { laneTag: "personal", date: '08-2003', heading: "Something", content: 'Added Feature X' },
    { laneTag: "career", date: '2016', heading: "School", content: 'Refactor Subsystem' },
    { laneTag: "hobby", date: '2016', heading: "Skilehrer", content: 'Refactor Subsystem' },

  ];

  export let laneDescriptionForTag: { [key: string]: string } = {
    personal: "Personal Life",
    volunteering: "Volunteering",
    hobby: "Hobby",
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

<table>
  <tbody>
    {#each entries as entry }
        <tr>
          <td class="event-date">{entry.date}</td>
          {#each laneTags as laneTag}
            {#if entry.laneTag == laneTag}
              <td class="branch-lane {laneTag}" class:branch-off={isNewLaneOccurance(laneTag)} class:branch-line={drawLine(laneTag)} >
                <div class="circle"/>
              </td>
            {:else}
              <td class="{laneTag}" class:branch-lane={drawLine(laneTag)}></td>
            {/if}
          {/each}
          <td class="spacer"></td>
          <td class="event-heading">
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
          <td class="event-content">
            {entry.content}
          </td>
        </tr>
    {/each}
  </tbody>
</table>


<style>
.event-date {
  text-align: right;
  vertical-align: middle;
}

.branch-lane{
  margin-left: auto;
  vertical-align: middle; 
  border-right: 4px solid !important;
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

.personal .circle{
  background-color: #4f46e5;
}

.branch-lane.personal{
  color: #4f46e5;
  border-color: #4f46e5 !important;
}

.hobby .circle{
  background-color: #ff0055;
}

.branch-lane.hobby{
  color:  #ff0055;
  border-color: #ff0055;
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

th, td {
  /* adds visible borders around every cell for Debugging */
  /* border: 1px solid #666;  */
  text-align: left;
  vertical-align: top;
}

thead {
  background-color: #222;
  color: #fff;
}

tbody tr:nth-child(odd) {
  background-color: #1a1a1a;
  
}
</style>