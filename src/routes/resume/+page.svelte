<script lang="ts">
  // TODO an: "Show all Acievments (not Directly Relevant for Work, Atemschutz, DLRG, HRG) (Default Off)"

  export let entries = [
    // Lane 1
    { laneTag: "personal", date: '05-1999', heading: "Born", content: "Hello World! (I Guess?) On the Same Day there was a 200 Year Flood, so i wasn't the Only Katastrophy Happening that Day. Atleast i got that going for me." },
    { laneTag: "personal", date: '08-2003', heading: "Something", content: 'Added Feature X' },
    { laneTag: "personal", date: '05-1999', heading: "Born", content: "Hello World! (I Guess?) On the Same Day there was a 200 Year Flood, so i wasn't the Only Katastrophy Happening that Day. Atleast i got that going for me." },
    
    { laneTag: "volunteering", date: '05-2012', heading: "Eintritt Jugendfeuerwehr", content: 'Experimental Branch Start' },
    { laneTag: "hobby", date: '2016', heading: "Skilehrer", content: 'Refactor Subsystem' },
    { laneTag: "Career", date: '2016', heading: "School", content: 'Refactor Subsystem' },
  ];

  export let laneDescriptionForTag: { [key: string]: string } = {
    personal: "Personal Life",
    volunteering: "Volunteering",
    hobby: "Hobby",
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
              <td class="branch-name {laneTag}"  class:branch-off={isNewLaneOccurance(laneTag)}></td>
              <td class="branch-line {laneTag}">
                  <div class="circle"/>
              </td>
            {:else}
              <td class="{laneTag}"></td>
              <td class="{laneTag}" class:branch-line={drawLine(laneTag)}></td>
            {/if}
          {/each}
          <td class="event-heading">
            {entry.heading}
          </td>
        </tr>
        <tr>
          <td class="event-date"></td>
          {#each laneTags as laneTag}
            <td class="branch-name {laneTag}">
              {#if entry.laneTag == laneTag}
                {#if firstTagOccurance(entry.laneTag)}
                  {laneDescriptionForTag[entry.laneTag]}
                {/if}
              {/if}
            </td>
            <td class="{laneTag}" class:branch-line={drawLine(laneTag)}></td>
          {/each}
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

.branch-name{
  writing-mode: vertical-lr;
  /* text-orientation: upright; */
  font-size: 1.2rem;
  padding: 1.5rem 0;
}

.branch-line{
  vertical-align: middle;
  border-left: 4px solid;
} 

.branch-off {
  border-top: 4px solid;
  border-top-right-radius: 10px;
}

.personal .circle{
  background-color: #4f46e5;
}

.branch-name.personal{
  color: #4f46e5;
}

.branch-line.personal{
  border-color: #4f46e5 !important;
} 

.hobby .circle{
  background-color: #ff0055;
}

.branch-name.hobby{
  color:  #ff0055;
}

.branch-line.hobby{
  border-color: #ff0055 !important;
} 

.volunteering .circle{
  background-color: #00ff37;
}

.branch-off.volunteering{
  border-color: #00ff37 !important;
}

.branch-name.volunteering{
  color: #00ff37;
}

.branch-line.volunteering{
  border-color: #00ff37 !important;
} 

.circle {
  width: 1rem;
  height: 1rem;
  position: relative;
  transform: translateX(calc(-50% - 3px));
  border-radius: 50%; /* makes it a circle */
}

.event-content {
  padding: 0.5rem 1rem;
}

.event-heading {
  font-weight: bold;
  font-size: 1.1rem;
  line-height: 1.2;
  align-self: center;
  vertical-align: middle;
}

.event-content {
  margin-top: 0.25rem;
  font-size: 0.9rem;
  color: #ccc;
}

table {
  border-collapse: collapse;
  font-family: sans-serif;
  table-layout: auto;
}

th, td {
  /* border: 1px solid #666; /* adds visible borders around every cell for Debugging */
  text-align: left;
  vertical-align:top
}

thead {
  background-color: #222;
  color: #fff;
}

tbody tr:nth-child(even) {
  background-color: #1a1a1a;
  
}
</style>