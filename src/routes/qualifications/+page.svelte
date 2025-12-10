<script lang="ts">
    import type { PageProps } from './$types';
    import { 
        filterByStartDateAsc, 
        filterByStartDateDesc, 
        filterByEndDateAsc, 
        filterByEndDateDesc 
    } from '../../ts/filters';
    import Icon from '@iconify/svelte';

    // ------------------------------------------------------------------------------------------ //

    // data from PageLoad
    let { data }: PageProps = $props();

    // filters for data
    const dateFilters = [filterByStartDateAsc, filterByStartDateDesc, filterByEndDateAsc, filterByEndDateDesc ];

    // ------------------------------------------------------------------------------------------ //

    // employment filter
    let employmentFilterIdx = $state(0);

    // ------------------------------------------------------------------------------------------ //

    // education filter
    let educationFilterIdx = $state(0);

    // ------------------------------------------------------------------------------------------ //

    // Filtered reactive data
    let filteredEmploymentHistory = $derived(
        [...data.workHistory].sort(dateFilters[employmentFilterIdx])
    );

    let filteredEducationHistory = $derived([...data.eductation].sort(dateFilters[educationFilterIdx]))

    // ------------------------------------------------------------------------------------------ //

    // filter toggles
    const toggleEmploymentStartDateFilter = () => {
        employmentFilterIdx = (employmentFilterIdx === 0) ? 1 : 0;
    };

    const toggleEmploymentEndDateFilter = () => {
        employmentFilterIdx = (employmentFilterIdx === 2) ? 3 : 2;
    };

    const toggleEducationStartDateFilter = () => {
        educationFilterIdx = (educationFilterIdx === 0) ? 1: 0;
    };

    const toggleEducationEndDateFilter = () => {
        educationFilterIdx = (educationFilterIdx === 2) ? 3 : 2;
    };
</script>
<h2 class="small-padding center-align bottom-shadow responsive border">Work History</h2>
<article class="surface-container-lowest center-align responsive border">
    <div class="medium-height scroll">
        <table class="center-align border stripes surface-container">
            <thead class="surface-container-lowest square fixed">
                <tr>
                    <th>
                        <button
                            class="transparent"  
                            onclick={toggleEmploymentStartDateFilter}
                        >
                            Started
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
                            Ended
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
                    <td>{work.startDate.toLocaleString('en-US', {year: 'numeric'})}</td>
                    <td>{work.endDate.toLocaleString('en-US', {year: 'numeric'})}</td>
                    <td>{work.employer}</td>
                    <td>{work.position}</td>
                </tr>
                {/each}
            </tbody>
        </table>
    </div>
</article><h2 class="small-padding round center-align bottom-shadow responsive border">Education</h2>
<article class="surface-container-lowest center-align responsive border">
        <div class="medium-height scroll">
            <table class="center-align border stripes surface-container">
            <thead class="surface-container-lowest square fixed">
                <tr>
                    <th>
                        <button
                            class="transparent"
                            onclick={toggleEducationStartDateFilter}
                        >
                            Started
                            {#if educationFilterIdx == 0}
                            <Icon icon="mdi:arrow-drop-up"/>
                            {:else if educationFilterIdx == 1}
                            <Icon icon="mdi:arrow-down-drop"/>
                            {:else}
                            <Icon icon="material-symbols:arrow-right"/>
                            {/if}
                        </button>
                        
                    </th>
                    <th>Completed</th>
                    <th>Institution</th>
                    <th>Degree</th>
                </tr>
            </thead>
            <tbody>
                {#each filteredEducationHistory as edu}
                <tr>
                    <td>{edu.startDate.toLocaleString('en-US', {year: 'numeric'})}</td>
                    <td>{edu.endDate.toLocaleString('en-US', {year: 'numeric'})}</td>
                    <td>{edu.institution}</td>
                    <td>{edu.degree}</td>
                </tr>
                {/each}
            </tbody>
        </table>
        </div>
</article>
<h2 class="small-padding round center-align bottom-shadow responsive border"> Certification</h2>
<article class="surface-container-lowest center-align responsive border">
    <div class="medium-height scroll">
        <table class="center-align border stripes surface-container">
            <thead class="surface-container-lowest square fixed">
                <tr>
                    <th>Issued</th>
                    <th>Expires</th>
                    <th>Issuer</th>
                    <th>Certification</th>
                </tr>
            </thead>
            <tbody>
                {#each data.certification as cert}
                <tr>
                    <td>{cert.startDate.toLocaleString('en-US', {year: 'numeric'})}</td>
                    <td>{cert.endDate.toLocaleString('en-US', {year: 'numeric'})}</td>
                    <td>{cert.issuer}</td>
                    <td>{cert.certification}</td>
                </tr>
                {/each}
            </tbody>
        </table>
    </div>
</article>