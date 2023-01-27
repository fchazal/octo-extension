function injectCSS(css) {
	style = document.createElement('style')
	style.setAttribute('id', 'custom-style-code')
	style.setAttribute('type', 'text/css')
	style.textContent = css
	
	document.documentElement.appendChild(style)
}

let host = document.location.host

// ONLY GOOGLE
if (host.indexOf('google') != -1) {
	injectCSS(`
	@import url(${chrome.runtime.getURL('/assets/octo.css')});

	img[src*="logo.gif"] {
		content: url(${chrome.runtime.getURL('/modules/injector/assets/logo.png')});
	}

	::-webkit-scrollbar-thumb {
		box-shadow: none !important;
    border: 5px solid transparent !important;
    border-radius: 10px;
    background-clip: content-box !important;
	}

	::-webkit-scrollbar-track,
	::-webkit-scrollbar-track:hover {
    background: transparent !important;
		box-shadow: none !important;
    border: none !important;
	}

	::-webkit-scrollbar,
	::-webkit-scrollbar:hover {
		background: none;
		border: 1px solid transparent;
		box-shadow: none;
	}
	`)
}

chrome.storage.sync.get([ 'accent', 'injector' ], data => {
	if (data['injector']) {
		let accent = data['accent'] || 'darkblue'
		// ONLY GMAIL
		if (host == 'mail.google.com') {
			injectCSS(`
			.yL .wl {
				background: #fafafa;
			}

			.IU.nn {
				background: none;
			}
			
			.nH.w-asV.aiw {
				box-shadow: none;
			}
			
			.nH.bkK.nn {
				margin-top: 2px;
				background: #fff;
				border-radius: 15px 0 0 0;
				outline: 2px solid var(--octo-${accent}-1);
			}
			.nH.bkK.nn .y0 {
				background: transparent;
			}
			.btb {
				box-shadow: 0 0 4px #0008;
			}
			.zA>.PE.PF::before {
				background-color: var(--octo-${accent}-4);
				width: 5px;
			}

			.nM .wT .zw {
				background: #fff;
				border-radius: 0 15px 15px 0;
				margin: 10px 0;
			}

			div.TH {
				border-radius: 10px;
			}

			.aih, .aii {
				margin-left: -20px !important;
				margin-right: 0px !importantst🗒;
			}
			
			.G-atb::before { display: none; }

			`)
		}

		// ONLY GDRIVE
		if (host == 'drive.google.com') {
			injectCSS(`
			#drive_main_page {
				background: #fafafa;
			}

			.ak25Me {
				border: none !important;
			}
			.a-s-Ba-Ak {
				border: none !important;
			}
			.PEfnhb .i6Fqyc {
				padding: 0 !important;
			}

			header#gb::before {
				content: "";
				background: #fafafa;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				position: absolute;
			}
			
			.ALpC8b {
				width: 280px;
				min-width: 280px;
				max-width: 280px;
			}

			.g3Fmkb {
				margin-top: 2px;
				background: #fff;
				border-radius: 15px 0 0 0;
				outline: 2px solid var(--octo-${accent}-1);
			}

			.lVcy9.aabwZd .M3pype {
				padding-left: 20px !important;
			}

			.a-l-Ba .h-R-w-d.a-l-S-Pc-w-d {
				margin-left: 20px;
			}

			.a-U-xc>.a-da-ji::before { opacity: 0 }
			`)
		}

		// ONLY GCALENDAR
		if (host == 'calendar.google.com') {
			injectCSS(`
			.tEhMVd {
				background: #fafafa;
			}

			header#gb::before {
				content: "";
				background: #fafafa;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				position: absolute;
			}
			
			.SGWAac {
				border: none !important;
			}

			.lYYbjc {
				margin-top: 2px;
				background: #fff;
				border-radius: 15px 0 0 0;
				outline: 2px solid var(--octo-${accent}-1);
			}

			#drawerMiniMonthNavigator {
				background: #fff;
				border-radius: 0 15px 15px 0;
				margin: 5px 0;
			}

			.hEtGGf.HDIIVe.sBn5T::before,
			.hEtGGf.HDIIVe.sBn5T::after { display: none }

			`)
		}

	}
})
