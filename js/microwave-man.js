const RELEASE_CACHE_KEY = 'microwaveManLatestRelease';
const RELEASE_CACHE_TTL_MS = 60 * 60 * 1000;

function readCachedRelease() {
    try {
        const raw = localStorage.getItem(RELEASE_CACHE_KEY);
        if (!raw) {
            return null;
        }

        const parsed = JSON.parse(raw);
        if (!parsed || typeof parsed.tag !== 'string' || typeof parsed.timestamp !== 'number') {
            return null;
        }

        return parsed;
    } catch (error) {
        console.warn('Failed to read release cache:', error.message);
        return null;
    }
}

function writeCachedRelease(tag) {
    try {
        localStorage.setItem(RELEASE_CACHE_KEY, JSON.stringify({
            tag,
            timestamp: Date.now()
        }));
    } catch (error) {
        console.warn('Failed to write release cache:', error.message);
    }
}

// Fetch latest Microwave Man release from GitHub
async function fetchLatestRelease() {
    const cached = readCachedRelease();
    const hasFreshCache = cached && (Date.now() - cached.timestamp) < RELEASE_CACHE_TTL_MS;

    if (hasFreshCache) {
        updateDownloadSection(cached.tag);
        return;
    }

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
            writeCachedRelease(version);
            updateDownloadSection(version);
        } else {
            // Fallback if no release found
            console.log('No non-prerelease version found, using fallback');
            if (cached) {
                updateDownloadSection(cached.tag);
            } else {
                updateDownloadSection('1.0.0');
            }
        }
    } catch (error) {
        console.error('Error fetching releases from GitHub API:', error.message);
        // Fall back to stale cache if available, then hardcoded default
        if (cached) {
            updateDownloadSection(cached.tag);
        } else {
            updateDownloadSection('1.0.0');
        }
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
                text: 'Windows',
                file: 'Microwave-Man-Windows.zip'
            },
            {
                text: 'macOS',
                file: 'Microwave-Man-MacOS.zip'
            },
            {
                text: 'Linux',
                file: 'Microwave-Man-Linux.zip'
            },
            {
                text: 'Web',
                file: 'Microwave-Man-Web.zip'
            },
            {
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
