// Fetch latest Microwave Man release from GitHub
async function fetchLatestRelease() {
    try {
        const response = await fetch('https://api.github.com/repos/TitledGames/Microwave-Man/releases');

        if (!response.ok) {
            throw new Error(`GitHub API returned ${response.status}`);
        }

        const releases = await response.json();

        // Find the latest non-prerelease version
        const latestRelease = releases.find(release => !release.prerelease);

        if (latestRelease) {
            const version = latestRelease.tag_name;
            updateDownloadSection(version);
        } else {
            // Fallback if no release found
            console.log('No non-prerelease version found, using fallback');
            updateDownloadSection('1.0.0');
        }
    } catch (error) {
        console.error('Error fetching releases from GitHub API:', error.message);
        // Fallback to hardcoded version - download links will still work
        updateDownloadSection('1.0.0');
    }
}

function updateDownloadSection(version) {
    // Update version badge
    const versionBadge = document.getElementById('versionBadge');
    if (versionBadge) {
        versionBadge.textContent = version;
    }

    // Create download links
    const downloadLinks = document.getElementById('downloadLinks');
    if (downloadLinks) {
        const baseUrl = `https://github.com/TitledGames/Microwave-Man/releases/download/${version}`;

        const links = [
            {
                icon: '',
                text: 'Windows',
                file: 'Microwave-Man-Windows.zip'
            },
            {
                icon: '',
                text: 'macOS',
                file: 'Microwave-Man-MacOS.zip'
            },
            {
                icon: '',
                text: 'Linux',
                file: 'Microwave-Man-Linux.zip'
            },
            {
                icon: '',
                text: 'Web',
                file: 'Microwave-Man-Web.zip'
            },
            {
                icon: '',
                text: 'PCK Data',
                file: 'Microwave-Man.pck'
            }
        ];

        // Clear existing content
        downloadLinks.innerHTML = '';

        // Use safer DOM manipulation to create links
        links.forEach(link => {
            const a = document.createElement('a');
            a.href = `${baseUrl}/${link.file}`;
            a.className = 'download-link';
            a.target = '_blank';
            a.rel = 'noopener noreferrer';

            if (link.icon) {
                const iconSpan = document.createElement('span');
                iconSpan.className = 'icon';
                iconSpan.textContent = link.icon;
                a.appendChild(iconSpan);
            }

            const textSpan = document.createElement('span');
            textSpan.textContent = link.text;

            a.appendChild(textSpan);
            downloadLinks.appendChild(a);
        });
    }
}

// Fetch release info when page loads
document.addEventListener('DOMContentLoaded', fetchLatestRelease);
