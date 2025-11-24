<script lang="ts">
    import type { PageProps } from './$types';
    import { 
        filterByStartDateAsc, 
        filterByStartDateDesc, 
        filterByEndDateAsc, 
        filterByEndDateDesc 
    } from '../../modules/tableFilters';
    import Icon from '@iconify/svelte';

    // ------------------------------------------------------------------------------------------ //

    // data from PageLoad
    let { data }: PageProps = $props();

    // ------------------------------------------------------------------------------------------ //

    // employment filters
    let employmentFilterIdx = $state(0);
    const dateFilters = [filterByStartDateAsc, filterByStartDateDesc, filterByEndDateAsc, filterByEndDateDesc ];

    // ------------------------------------------------------------------------------------------ //

    // Filtered reactive dataa
    let filteredEmploymentHistory = $derived(
        [...data.workHistory].sort(dateFilters[employmentFilterIdx])
    );

    // ------------------------------------------------------------------------------------------ //

    // filter toggles
    const toggleEmploymentStartDateFilter = () => {
        employmentFilterIdx = (employmentFilterIdx === 0) ? 1 : 0;
    };

    const toggleEmploymentEndDateFilter = () => {
        employmentFilterIdx = (employmentFilterIdx === 2) ? 3 : 2;
    };

</script>
<h2>Work History</h2>
<article class="surface-container-lowest center-align border">
        <h5 class="underline">Employment History</h5>
    <div class="medium-height scroll">
        <table class="center-align border stripes surface-container">
            <thead class="surface-container-lowest square fixed">
                <tr>
                    <th>
                        <button
                            class="transparent"  
                            onclick={toggleEmploymentStartDateFilter}
                        >
                            Start Date
                            {#if employmentFilterIdx == 0}
                            <Icon icon="mdi:arrow-drop-up"/>
                            {:else if employmentFilterIdx == 1}
                            <Icon icon="mdi:arrow-down-drop"/>
                            {:else}
                            <Icon icon="material-symbols:arrow-right"/>
                            {/if}
                        </button>
                    </th>
                    <th>
                        <button
                            class="transparent"  
                            onclick={toggleEmploymentEndDateFilter}
                        >
                            End Date
                            {#if employmentFilterIdx == 2}
                            <Icon icon="mdi:arrow-drop-up"/>
                            {:else if employmentFilterIdx == 3}
                            <Icon icon="mdi:arrow-down-drop"/>
                            {:else}
                            <Icon icon="material-symbols:arrow-right"/>
                            {/if}
                        </button>
                    </th>
                    <th>Employer</th>
                    <th>Position</th>
                </tr>
            </thead>
            <tbody>
                {#each filteredEmploymentHistory as work}
                <tr>
                    <td>{work.startDate.toLocaleString('en-US', {year: 'numeric', month: 'long'})}</td>
                    <td>{work.endDate.toLocaleString('en-US', {year: 'numeric', month: 'long'})}</td>
                    <td>{work.employer}</td>
                    <td>{work.position}</td>
                </tr>
                {/each}
            </tbody>
        </table>
    </div>
</article>
<article class="surface-container-lowest center-align border">
    <h5 class="underline">Education</h5>
        <div class="medium-height scroll">
            <table class="center-align border stripes surface-container">
            <thead class="surface-container-lowest square fixed">
                <tr>
                    <th>Started</th>
                    <th>Completed</th>
                    <th>Institution</th>
                    <th>Degree</th>
                </tr>
            </thead>
            <tbody>
                {#each data.eductation as edu}
                <tr>
                    <td>{edu.startDate.toLocaleString('en-US', {year: 'numeric', month: 'long'})}</td>
                    <td>{edu.endDate.toLocaleString('en-US', {year: 'numeric', month: 'long'})}</td>
                    <td>{edu.institution}</td>
                    <td>{edu.degree}</td>
                </tr>
                {/each}
            </tbody>
        </table>
        </div>
</article>
<article class="surface-container-lowest center-align border">
    <h5 class="underline">Certification</h5>
    <div class="medium-height scroll">
        <table class="center-align borde3r stripes surface-container">
            <thead class="surface-container-lowest square fixed">
                <tr>
                    <th>Issued - Expires</th>
                    <th>Issuer</th>
                    <th>Certification</th>
                </tr>
            </thead>
            <tbody>
                {#each data.certification as cert}
                <tr>
                    <td>{cert.years}</td>
                    <td>{cert.issuer}</td>
                    <td>{cert.certification}</td>
                </tr>
                {/each}
            </tbody>
        </table>
    </div>
</article>