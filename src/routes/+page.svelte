
<script lang="ts">
    import me from '$lib/assets/me.webp'
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>
<header class="center-align">
    <h1>About Me</h1>
</header>	
<article class="no-padding round surface-container-lowest center-align">
    <img class="responsive" src="{me}" alt="Me with a node from ARCC's beartooth cluster">
    <div class="padding">
        <h2>Michael B. Lance</h2>
        <p> 
            I am student of Applied Software Development at the University of Wyoming in Laramie Wyoming.
            I have occaisionally been known to develop software projects. This website exists to document 
            my software development hijinks. The primary intent is to showcase my skillset, I have been
            advised to withold including my social security number here. Also, my head is no longer buzzed, 
            there just hasn't been a good picture taken of me in over a year.
        </p>
    </div>
</article>
<article class="round surface-container-lowest center-align">
    <h5>Education</h5>
        <table>
            <thead class="center-align">
                <tr>
                    <th>Year Range</th>
                    <th>Institution</th>
                    <th>Degree</th>
                </tr>
            </thead>
            <tbody class="center-align">
                {#each data.eductation as edu}
                <tr>
                    <td>{edu.years}</td>
                    <td>{edu.institution}</td>
                    <td>{edu.degree}</td>
                </tr>
                {/each}
            </tbody>
        </table>
</article>
<article class="round surface-container-lowest center-align">
    <h5>Certification</h5>
        <table>
            <thead class="center-align">
                <tr>
                    <th>Issued - Expires</th>
                    <th>Issuer</th>
                    <th>Certification</th>
                </tr>
            </thead>
            <tbody class="center-align">
                {#each data.certification as cert}
                <tr>
                    <td>{cert.years}</td>
                    <td>{cert.issuer}</td>
                    <td>{cert.certification}</td>
                </tr>
                {/each}
            </tbody>
        </table>
</article>